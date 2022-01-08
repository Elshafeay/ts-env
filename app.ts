import express, { Request, Response } from 'express';
// to pass the errors to the error handler automatically without the need to use next() with every route

const app = express();

app.use(express.json());

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to the home page!');
});

export default app;