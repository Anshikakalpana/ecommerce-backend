import mongoose, { Schema, Document } from 'mongoose';
import { product , productVariant ,productComment } from './products';
import { date } from 'zod';



const commentSchema = new Schema<productComment>({
    userid:{type:String, required:true},  
    rating:{type:Number, required:true},
    comment:{type:String},
    images:{type:[String]},
   }, {timestamps: true}
)

const variantSchema = new Schema< productVariant>({
    variantName:{type:String, required:true}, 
    additionalPrice:{type:Number, required:true}, 
    stock:{type:Number , required:true},
    color:{type:String, required:true},
    size:{type:String},
})

const productSchema = new Schema<product>({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: [String], required: true },
    tags: { type: [String], required: true },
    variants: { type: [variantSchema] },
    comments: { type: [commentSchema] },
    ingredients: { type: [String] }
}, {timestamps: true});

export default mongoose.model('Product', productSchema);
