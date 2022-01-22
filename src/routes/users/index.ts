import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  const users = [
    {
      name: 'Ahmed',
      phone: '01012345678',
      age: 15,
    },
    {
      name: 'Mohamed',
      phone: '12345678901',
      age: 25,
    }
  ];

  res.send(users);
});

export default router;