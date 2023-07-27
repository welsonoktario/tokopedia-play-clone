import mongoose, { Schema, Types } from 'mongoose'

export type ProductType = {
  productUrl: string
  title: string
  price: number
}

export const ProductSchema = new Schema<ProductType>({
  productUrl: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
})

export const Product = mongoose.model<ProductType>('Product', ProductSchema)
