import 'reflect-metadata';
import 'express-async-errors';
import * as dotenv from 'dotenv';
import { app } from './app';
import { loadDataInitDB } from './helpers/loadDataInitDB';

dotenv.config();

import { AppDataSource } from 'config/data-source';

const port = process.env.PORT || 5000;

AppDataSource.initialize()
  .then(() => {
    // here you can start to work with your database

    console.log('Database initialized');
    loadDataInitDB();
    app.listen(port, () => console.log('Server is running in', port));
  })
  .catch((error) => console.log(error));
