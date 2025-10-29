import mongoose, { Schema } from "mongoose";
//import type { product, productVariant, productComment } from "./products.js";
const commentSchema = new Schema({
    userid: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    images: { type: [String] },
    date: { type: Date, default: Date.now },
}, { _id: false });
const variantSchema = new Schema({
    variantid: { type: String, required: true },
    variantName: { type: String, required: true },
    additionalPrice: { type: Number, required: true },
    stock: { type: Number, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
}, { _id: false });
const productSchema = new Schema({
    // productid: { type: String, required: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    slug: { type: String, required: true },
    price: { type: Number, required: true },
    // discount: { type: Number, default: 0 },
    finalPrice: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    imageUrl: { type: [String], required: true },
    tags: { type: [String], required: true },
    inStock: { type: Boolean, default: true },
    totalReviews: { type: Number, default: 0 },
    averageRating: { type: Number, default: 0 },
    variants: { type: [variantSchema], default: [] },
    comments: { type: [commentSchema], default: [] },
    ingredients: { type: [String] },
    sku: { type: String, required: true },
    isFeatured: { type: Boolean, default: false },
    isNewArrival: { type: Boolean, default: false },
    status: {
        type: String,
        enum: ["active", "inactive", "out_of_stock"],
        default: "active",
    },
    sellerId: { type: String },
    returnPolicy: { type: String },
    warranty: { type: String },
    shippingInfo: { type: String },
    shelfLife: { type: String },
    skinType: { type: [String] },
    netQuantity: { type: String },
    originCountry: { type: String },
}, { timestamps: true });
export default mongoose.model("Product", productSchema);
//# sourceMappingURL=productSchema.js.map