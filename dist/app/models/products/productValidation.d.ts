import { z } from "zod";
declare const productValidationSchema: z.ZodObject<{
    brand: z.ZodString;
    name: z.ZodString;
    slug: z.ZodString;
    price: z.ZodNumber;
    finalPrice: z.ZodNumber;
    description: z.ZodString;
    category: z.ZodString;
    imageUrl: z.ZodArray<z.ZodString>;
    tags: z.ZodArray<z.ZodString>;
    inStock: z.ZodDefault<z.ZodBoolean>;
    totalReviews: z.ZodDefault<z.ZodNumber>;
    averageRating: z.ZodDefault<z.ZodNumber>;
    variants: z.ZodDefault<z.ZodArray<z.ZodObject<{
        variantid: z.ZodString;
        variantName: z.ZodString;
        additionalPrice: z.ZodNumber;
        stock: z.ZodNumber;
        color: z.ZodString;
        size: z.ZodString;
    }, z.core.$strip>>>;
    comments: z.ZodDefault<z.ZodArray<z.ZodObject<{
        userid: z.ZodString;
        rating: z.ZodNumber;
        comment: z.ZodOptional<z.ZodString>;
        images: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
    ingredients: z.ZodOptional<z.ZodArray<z.ZodString>>;
    sku: z.ZodString;
    isFeatured: z.ZodOptional<z.ZodBoolean>;
    isNewArrival: z.ZodOptional<z.ZodBoolean>;
    status: z.ZodDefault<z.ZodEnum<{
        active: "active";
        inactive: "inactive";
        out_of_stock: "out_of_stock";
    }>>;
    sellerId: z.ZodOptional<z.ZodString>;
    returnPolicy: z.ZodOptional<z.ZodString>;
    warranty: z.ZodOptional<z.ZodString>;
    shippingInfo: z.ZodOptional<z.ZodString>;
    shelfLife: z.ZodOptional<z.ZodString>;
    skinType: z.ZodOptional<z.ZodArray<z.ZodString>>;
    netQuantity: z.ZodOptional<z.ZodString>;
    originCountry: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodOptional<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDate>>;
    updatedAt: z.ZodOptional<z.ZodPipe<z.ZodTransform<unknown, unknown>, z.ZodDate>>;
}, z.core.$strip>;
export type ProductInput = z.infer<typeof productValidationSchema>;
export default productValidationSchema;
//# sourceMappingURL=productValidation.d.ts.map