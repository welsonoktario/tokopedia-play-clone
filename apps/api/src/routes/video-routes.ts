import express, { Router } from 'express'

import { Video } from '@models/video-model'

import { statusFail, statusOK } from '@helpers/json-response'

const videoRoutes: Router = express.Router()

videoRoutes.get('/', async (req, res) => {
  try {
    const videos = await Video.find({})

    statusOK({
      res,
      data: {
        videos,
      },
    })
  } catch (err: any) {
    statusFail({
      res,
      msg: 'Error: ' + err.message,
    })
  }
})

export default videoRoutes
