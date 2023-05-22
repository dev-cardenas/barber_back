import 'express-async-errors'
import * as dotenv from 'dotenv'
import { app } from './app'

dotenv.config()

const port = parseInt(process.env.PORT) ?? 3333

app
  .listen({
    port,
  })
  .then(() => {
    console.log('HTTP server running on http://localhost:' + port)
  })
