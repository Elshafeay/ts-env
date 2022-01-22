import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morganMiddleware from './src/middleware/logger';
import { errorHandler } from './src/middleware/error-handler';
import apiRouter from './src/routes';
import { calcAverage, testFS } from './src/utils/common';

dotenv.config();

const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.use('/api', apiRouter);

app.get('/', (req: Request, res: Response): void => {
  testFS();
  res.send('Welcome to the home page!');
});

app.get('/error', (req: Request, res: Response): void => {
  throw new Error('What are you doing!!!');
});

app.get('*', (req: Request, res: Response): void => {
  res.status(404).send('Not Found!');
});

app.use(errorHandler);

export default app;