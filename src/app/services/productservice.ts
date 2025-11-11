import type { product } from "../models/products/products.js";
import Product from "../models/products/productSchema.js";

const producttodb = async (productData: Partial<product>) => {
  
    const result = await Product.create(productData as any);
    return result;
};


const getAllProductsFromDb= async()=>{
    const data= await Product.find();
    return data;
}

const getProductByIdFromDb= async(productId:string)=>{

    const data= await  Product.findById(productId);
    return data;


}


const getProductBySearchFromDb= async(searchterm:string)=>{
    const query= searchterm? {name:{$regex:searchterm,$options:'i'}}:{};

    const data = await Product.find( query);
    return data;

}


const updateInDb= async(productId:string, updateData:Partial<product>)=>{

    const data = await Product.findByIdAndUpdate(productId, updateData, { new: true });
    return data;

}


const deleteFromDb= async(productId:string )=>{
    const result=  await Product.findByIdAndDelete(productId);
    return result;
}

  


export const service = {
    producttodb,
    getAllProductsFromDb,
    getProductByIdFromDb,
    getProductBySearchFromDb,
    updateInDb,
    deleteFromDb
};