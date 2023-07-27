import mongoose, { Schema } from 'mongoose'

export type ProductType = {
  id: string
  title: string
  caption?: string
}

export const ProductSchema = new Schema<ProductType>({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  caption: { type: String, required: false },
})

export const Product = mongoose.model<ProductType>('Product', ProductSchema)
