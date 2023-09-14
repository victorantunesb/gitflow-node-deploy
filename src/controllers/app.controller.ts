import { Response, Request, Router } from 'express'
import { AppService } from './app.service'

export const router: Router = Router()

const appService: AppService = new AppService()

router.get('/',( request: Request, response: Response ) => {
  const data = appService.homeRoute()
  response.status(200).send(data)
})


  
