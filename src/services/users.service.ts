import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

class UserService {
  public users = userModel;

  public async findAllUser(): Promise<User[]> {
    const users: User[] = await this.users.find().populate('hobbies', 'name');
    return users;
  }

  public async findUserById(userId: string): Promise<User> {
    if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

    const findUser: User = await this.users.findOne({ _id: userId });
    if (!findUser) throw new HttpException(409, "You're not user");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ name: userData.name });
    if (findUser) throw new HttpException(409, `User name ${userData.name} already exists`);

    const createUserData: User = await this.users.create(userData);

    return createUserData;
  }

  public async updateUser(userId: string, userData: CreateUserDto): Promise<User> {
    if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

    const findUser: User = await this.users.findOne({ _id: userId });
    if (findUser.name === userData.name) throw new HttpException(409, `User name ${userData.name} already updated`);

    const updateUserById: User = await this.users.findByIdAndUpdate(
      { _id: userId },
      { name: userData.name },
      {
        new: true,
      },
    );
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async updateUserHobby(userId: string, hobbyId: string): Promise<User> {
    if (!userId || !hobbyId) throw new HttpException(400, 'UserId or HobbyId not found');

    const findOneUserData: User = await this.users.findOne({ _id: userId });
    if (findOneUserData.hobbies.indexOf(hobbyId) !== -1) throw new HttpException(409, `User Hobby ${hobbyId} already added`);
    findOneUserData.hobbies.push(hobbyId);
    const updateUserById: User = await this.users.findByIdAndUpdate(
      { _id: userId },
      { hobbies: findOneUserData.hobbies },
      {
        new: true,
      },
    );
    if (!updateUserById) throw new HttpException(409, "You're not user");

    return updateUserById;
  }

  public async deleteUser(userId: string): Promise<User> {
    const deleteUserById: User = await this.users.findByIdAndDelete(userId);
    if (!deleteUserById) throw new HttpException(409, "You're not user");

    return deleteUserById;
  }
}

export default UserService;
