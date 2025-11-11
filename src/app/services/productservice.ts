import type { product } from "../models/products/products.js";
import Product from "../models/products/productSchema.js";

const producttodb = async (productData: Partial<product>) => {
    // pass to mongoose; Product.create will accept the subset of fields
    const result = await Product.create(productData as any);

    return result;
};

export const service = {
    producttodb
};