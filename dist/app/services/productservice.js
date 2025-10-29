import Product from "../models/products/productSchema.js";
const producttodb = async (productData) => {
    const result = await Product.create(productData);
    return result;
};
const getAllProductsFromDb = async () => {
    const data = await Product.find();
    return data;
};
const getProductByIdFromDb = async (productId) => {
    const data = await Product.findById(productId);
    return data;
};
const getProductBySearchFromDb = async (searchterm) => {
    const query = searchterm ? { name: { $regex: searchterm, $options: 'i' } } : {};
    const data = await Product.find(query);
    return data;
};
const updateInDb = async (productId, updateData) => {
    const data = await Product.findByIdAndUpdate(productId, updateData, { new: true });
    return data;
};
const deleteFromDb = async (productId) => {
    const result = await Product.findByIdAndDelete(productId);
    return result;
};
export const service = {
    producttodb,
    getAllProductsFromDb,
    getProductByIdFromDb,
    getProductBySearchFromDb,
    updateInDb,
    deleteFromDb
};
//# sourceMappingURL=productservice.js.map