

import { z  } from "zod";

const variantValidationSchema = z.object({
  variantid: z.string().min(1),
  variantName: z.string().min(2).max(100),
  additionalPrice: z.number().min(0),
  stock: z.number().min(0),
  color: z.string().min(2).max(50),
  size: z.string().min(1).max(50),
});

const dateSchema = z.preprocess((val) => {
  if (typeof val === "string" || typeof val === "number") return new Date(val);
  return val;
}, z.date());

const commentValidationSchema = z.object({
  userid: z.string().min(3),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),

  images: z.array(z.string()).optional(),
});

 const productValidationSchema = z.object({
  brand: z.string().min(2 ,"Brand is required"),
  name: z.string().min(3 ,"Name is required"),
  slug: z.string().min(3 ,"Slug is required"),
  price: z.number().positive().min(0 ,"Price is required"),
  finalPrice: z.number().positive().min(0 ,"Final Price is required"),
  description: z.string().min(8 ,"Description is required"),
  category: z.string(),
  imageUrl: z.array(z.string().url()),
  tags: z.array(z.string().min(1)),
  inStock: z.boolean().default(true),
  totalReviews: z.number().min(0).default(0),
  averageRating: z.number().min(0).max(5).default(0),

  variants: z.array(variantValidationSchema).default([]),
  comments: z.array(commentValidationSchema).default([]),

  ingredients: z.array(z.string()).optional(),

  sku: z.string().min(1),

  isFeatured: z.boolean().optional(),
  isNewArrival: z.boolean().optional(),
  status: z.enum(["active", "inactive", "out_of_stock"]).default("active"),

  sellerId: z.string().optional(),
  returnPolicy: z.string().optional(),
  warranty: z.string().optional(),
  shippingInfo: z.string().optional(),
  shelfLife: z.string().optional(),

  skinType: z.array(z.string()).optional(),
  netQuantity: z.string().optional(),
  originCountry: z.string().optional(),

  createdAt: dateSchema.optional(),
  updatedAt: dateSchema.optional(),
});

export type ProductInput = z.infer<typeof productValidationSchema>;
export default productValidationSchema;
