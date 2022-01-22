import { Response, Request, NextFunction } from 'express';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction){
  console.log('There\'s a new Error in your system');
  console.log(err);
  res.status(400).send('Something Went Wrong! Try again later.');
}