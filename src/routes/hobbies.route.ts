import { Router } from 'express';
import HobbiesController from '@controllers/hobbies.controller';
import { CreateHobbiesDto } from '@dtos/hobbies.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class HobbiesRoute implements Routes {
  public path = '/hobbies';
  public router = Router();
  public HobbiesController = new HobbiesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.HobbiesController.getHobbies);
    this.router.get(`${this.path}/:id`, this.HobbiesController.getHobbyById);
    this.router.post(`${this.path}`, validationMiddleware(CreateHobbiesDto, 'body'), this.HobbiesController.createHobby);
    this.router.put(`${this.path}/:id`, validationMiddleware(CreateHobbiesDto, 'body', true), this.HobbiesController.updateHobby);
    this.router.delete(`${this.path}/:id`, this.HobbiesController.deleteHobby);
  }
}

export default HobbiesRoute;
