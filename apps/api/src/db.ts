import { configDotenv } from 'dotenv'
import mongoose from 'mongoose'

configDotenv()

const { DB_HOST, DB_PORT, DB_NAME } = process.env
const dsn = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

export const connectDb = async () =>
  await mongoose
    .createConnection(dsn, {
      compressors: 'zstd',
      zlibCompressionLevel: 9,
    })
    .asPromise()
