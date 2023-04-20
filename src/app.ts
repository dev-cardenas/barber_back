import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import Youch from 'youch';

import router from './routes';

export const app = express();
app.use(cors());

app.use(express.json());

app.use(router);

app.use(async (err: Error, request: Request, response: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    const errors = await new Youch(err, request).toJSON(); // toHTML
    return response.status(500).json(errors);
  }

  if (err instanceof Error) {
    return response.status(400).json({
      error: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
});
