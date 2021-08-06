import { CreateHobbiesDto } from '@dtos/hobbies.dto';
import { HttpException } from '@exceptions/HttpException';
import { Hobbies } from '@interfaces/hobbies.interface';
import HobbiesModel from '@models/hobbies.model';
import { isEmpty } from '@utils/util';

class HobbiesService {
  public hobbies = HobbiesModel;

  public async findAllHobbies(): Promise<Hobbies[]> {
    const hobbies: Hobbies[] = await this.hobbies.find();
    return hobbies;
  }

  public async findHobbiesById(hobbyId: string): Promise<Hobbies> {
    if (isEmpty(hobbyId)) throw new HttpException(400, "You're not hobbyId");

    const findHobbies: Hobbies = await this.hobbies.findOne({ _id: hobbyId });
    if (!findHobbies) throw new HttpException(409, 'Hobby Not Found');

    return findHobbies;
  }

  public async createHobbies(hobbyData: CreateHobbiesDto): Promise<Hobbies> {
    if (isEmpty(hobbyData)) throw new HttpException(400, 'HobbyData Not Found');

    const findHobbies: Hobbies = await this.hobbies.findOne({ name: hobbyData.name });
    if (findHobbies) throw new HttpException(409, `Hobby ${hobbyData.name} already exists`);

    const createUserData: Hobbies = await this.hobbies.create(hobbyData);

    return createUserData;
  }

  public async updateHobby(hobbyId: string, hobbyData: CreateHobbiesDto): Promise<Hobbies> {
    if (!hobbyId) throw new HttpException(400, 'HobbyId Cannot be empty');
    if (isEmpty(hobbyData)) throw new HttpException(400, 'HobbyData Cannot be empty');

    const findHobbies: Hobbies = await this.hobbies.findOne({ _id: hobbyId });
    if (!findHobbies) throw new HttpException(409, 'Hobby Not Found');
    if (hobbyData.name && hobbyData.name === findHobbies.name) throw new HttpException(409, `Hobby ${hobbyData.name} already exists`);
    if (hobbyData.passionLevel && hobbyData.passionLevel === findHobbies.passionLevel)
      throw new HttpException(409, `Passion Level ${hobbyData.passionLevel} already exists`);
    if (hobbyData.year && hobbyData.year === findHobbies.year) throw new HttpException(409, `Hobby ${hobbyData.year} already exists`);

    const updateHobbyById: Hobbies = await this.hobbies.findByIdAndUpdate(
      { _id: hobbyId },
      {
        name: hobbyData.name || findHobbies.name,
        passionLevel: hobbyData.passionLevel || findHobbies.passionLevel,
        year: hobbyData.year || findHobbies.year,
      },
      {
        new: true,
      },
    );
    if (!updateHobbyById) throw new HttpException(409, 'Hobby Not Found');

    return updateHobbyById;
  }

  public async deleteHobby(hobbyId: string): Promise<Hobbies> {
    const deleteHobbyById: Hobbies = await this.hobbies.findByIdAndDelete(hobbyId);
    if (!deleteHobbyById) throw new HttpException(409, 'Hobby Not Found');

    return deleteHobbyById;
  }
}

export default HobbiesService;
