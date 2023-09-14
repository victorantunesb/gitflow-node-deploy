import express, { Express, Router }  from 'express';
import { router } from './controllers/app.controller';

const app: Express = express()

app.use(express.json())

app.use('/', router)

const port: number = 8080

app.listen(port, () => {
  console.log(`Server was listened on port ${port}`)
})
