

import { z } from "zod";

export const cartItemSchema = z.object({
  productId: z.string().min(1),
  variantId: z.string().min(1),

  brand: z.string().min(1),
  name: z.string().min(1),
  slug: z.string().optional(),
  imageUrl: z.string().optional(),

  quantity: z.number().min(1),

  unitPrice: z.number().min(0),
  originalPrice: z.number().min(0).optional(),
  finalPrice: z.number().min(0),

  stockAtTime: z.number().optional(),
  maxAllowedPerOrder: z.number().optional(),
});

export const cartPricingSchema = z.object({
  subTotal: z.number().min(0),
  tax: z.number().min(0),
  discount: z.number().min(0),
  deliveryCharge: z.number().min(0),
  payableAmount: z.number().min(0),
});

export const cartValidationSchema = z.object({
 // userId: z.string().min(1),
  items: z.array(cartItemSchema).min(1),
  pricing: cartPricingSchema,
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type CartInput = z.infer<typeof cartValidationSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;


export default { cartValidationSchema, cartItemSchema };

