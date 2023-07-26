import express from 'express'

import { connectDb } from './db'

const app = express()
app.use(express.json())

connectDb().then((conn) => {
  conn.once('connected', () => {
    console.info('DB connected!')
    app.listen(process.env.APP_PORT, () => {
      console.info(
        `Server running on http://${process.env.APP_HOST}:${process.env.APP_PORT}`,
      )
    })
  })
})

app.get('/', (req, res) => {
  res.send('Helo world!')
})
