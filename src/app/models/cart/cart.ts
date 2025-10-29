export type cart = {
 // userId: string;
  items: cartItem[];
  pricing: cartPricing;  
  createdAt: Date;
  updatedAt: Date;
};


export type cartItem = {
  productId: string;
  variantId?: string;

  brand: string;
  name: string;
  slug?: string;
  imageUrl?: string;

  quantity: number;

  unitPrice: number;          
  originalPrice?: number;     
  finalPrice: number;        

  stockAtTime?: number;       
  maxAllowedPerOrder?: number;
};


export type cartPricing = {
  subTotal: number;         
  tax: number;               
  discount: number;         
  deliveryCharge: number;   
  payableAmount: number;   
};


