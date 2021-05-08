import { Request, Response } from 'express';
import CreateDogService from '../services/CreateDogService';

export function createDog(request: Request, response: Response) {
  const { name, breed } = request.body;

  const dog = CreateDogService.execute({ name, breed });

  return response.send(dog);
}