import Cart from "../models/cart/cartSchema.js";
import type { cartItem } from "../models/cart/cart.js";
import redis from "../config/redis.js";
import { resolve } from "path";
import { response } from "express";

const recalculateCartPricing = (cart: any) => {
  
  const subTotal = cart.items.reduce(
    (sum: number, item: any) => sum + (item.finalPrice ?? 0) * (item.quantity ?? 1),
    0
  );

  const taxRate = 0.1; 
  const discount = cart.pricing?.discount || 0;
  const tax = subTotal * taxRate;
  const deliveryCharge = cart.pricing?.deliveryCharge || 0;

  cart.pricing.subTotal = subTotal;
  cart.pricing.tax = tax;
  cart.pricing.discount = discount;
  cart.pricing.deliveryCharge = deliveryCharge;
  cart.pricing.payableAmount = subTotal + tax + deliveryCharge - discount;
};

// adding product to cart
const productToCart = async (userId: string, productData: cartItem) => {
  try{
let cart = await Cart.findOne({ userId: userId.toString() });

if (!cart) {
  cart = await Cart.create({
    userId: userId.toString(),
      items: [productData],
      pricing: {
        subTotal: productData.finalPrice * productData.quantity,
        tax: 0,
        discount: 0,
        deliveryCharge: 0,
        payableAmount: productData.finalPrice * productData.quantity,
      },
    });
  } else {
    
    const existingItem = cart.items.find(
      (item: any) =>
        item.productId.toString() === productData.productId.toString() 
        
    );

    if (existingItem) {

      existingItem.quantity += productData.quantity;
      existingItem.finalPrice =
        productData.finalPrice * existingItem.quantity;
    } else {
  
      cart.items.push(productData);
    }

    
    recalculateCartPricing(cart);

    await cart.save();
   
  }
  
 await redis.set(`cart:${userId}`, JSON.stringify(cart) , {EX:3000});

  return cart;
}
  catch(err){
   return response.json({
    message:"cant add product to route"
   })


  }
};

// fetch cart
const getCart = async (userId: string) => {

  const redisCart = await redis.get(`cart:${userId}`);
  if (redisCart) {
    return JSON.parse(redisCart); 
  }

 
  const dbCart = await Cart.findOne({ userId: userId.toString() });

  if (dbCart) {
  
    await redis.set(`cart:${userId}`, JSON.stringify(dbCart.toObject()), { EX: 3000 }); 
  }

  return dbCart;
};
//
const deleteProductFromCart = async (userId: string, productId: string) => {
 
  let cart = await Cart.findOne({ userId: userId.toString() });
  if (!cart) {
    return null;
  }

  
  const updatedItems = cart.items.filter(
    (item: any) =>
      item.productId.toString() !== productId.toString() 
  );

  if (updatedItems.length === cart.items.length) {
    return { message: "Product not found in cart", success: false };
  }

  cart.items = updatedItems;


  recalculateCartPricing(cart);


  await cart.save();

  await redis.set(`cart:${userId}`, JSON.stringify(cart.toObject()), {EX:3000});

  return { success: true, message: "Product removed successfully", data: cart };
};



export const service = {
  productToCart,
  getCart,
  deleteProductFromCart

};
