import { NextFunction, Request, Response } from 'express';
import { CreateHobbiesDto } from '@dtos/hobbies.dto';
import { Hobbies } from '@interfaces/hobbies.interface';
import hobbiesService from '@services/hobbies.service';

class HobbiesController {
  public hobbiesService = new hobbiesService();

  public getHobbies = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllHobbiesData: Hobbies[] = await this.hobbiesService.findAllHobbies();

      res.status(200).json({ data: findAllHobbiesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getHobbyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hobbyId: string = req.params.id;
      const findOneHobbyData: Hobbies = await this.hobbiesService.findHobbiesById(hobbyId);

      res.status(200).json({ data: findOneHobbyData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hobbyData: CreateHobbiesDto = req.body;
      const createHobbyData: Hobbies = await this.hobbiesService.createHobbies(hobbyData);

      res.status(201).json({ data: createHobbyData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hobbyId: string = req.params.id;
      const hobbyData: CreateHobbiesDto = req.body;
      const updateHobbyData: Hobbies = await this.hobbiesService.updateHobby(hobbyId, hobbyData);

      res.status(200).json({ data: updateHobbyData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const hobbyId: string = req.params.id;
      const deleteHobbyData: Hobbies = await this.hobbiesService.deleteHobby(hobbyId);

      res.status(200).json({ data: deleteHobbyData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default HobbiesController;
