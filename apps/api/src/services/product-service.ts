import { Types } from 'mongoose'

import { Product } from '@models/product-model'
import { Video } from '@models/video-model'

export const getAllVideoProducts = async (videoId: Types.ObjectId) => {
  try {
    const video = await Video.findById(videoId)

    if (!video) {
      throw new Error('Video not found')
    }

    return video.products
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const getProductById = async (videoId: Types.ObjectId, productId: Types.ObjectId) => {
  try {
    const video = await Video.findById(videoId)

    if (!video) {
      throw new Error('Video data not found')
    }

    if (!video.products) {
      return []
    }

    return video.products.find((p) => productId.equals(p.id))
  } catch (err: any) {
    throw new Error(err.message)
  }
}

export const insertProduct = async (
  videoId: Types.ObjectId,
  productUrl: string,
  title: string,
  price: number,
) => {
  try {
    const video = await Video.findById(videoId)

    if (!video) {
      throw new Error('Video data not found')
    }

    const product = new Product({
      productUrl,
      title,
      price,
    })
    video.products?.push(product)

    return await video.save()
  } catch (err: any) {
    throw new Error(err.message)
  }
}
