import { z } from "zod";
export declare const cartItemSchema: z.ZodObject<{
    productId: z.ZodString;
    brand: z.ZodString;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    unitPrice: z.ZodNumber;
    originalPrice: z.ZodOptional<z.ZodNumber>;
    finalPrice: z.ZodNumber;
    stockAtTime: z.ZodOptional<z.ZodNumber>;
    maxAllowedPerOrder: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const cartPricingSchema: z.ZodObject<{
    subTotal: z.ZodNumber;
    tax: z.ZodNumber;
    discount: z.ZodNumber;
    deliveryCharge: z.ZodNumber;
    payableAmount: z.ZodNumber;
}, z.core.$strip>;
export declare const cartValidationSchema: z.ZodObject<{
    userId: z.ZodString;
    items: z.ZodArray<z.ZodObject<{
        productId: z.ZodString;
        brand: z.ZodString;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        originalPrice: z.ZodOptional<z.ZodNumber>;
        finalPrice: z.ZodNumber;
        stockAtTime: z.ZodOptional<z.ZodNumber>;
        maxAllowedPerOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    pricing: z.ZodObject<{
        subTotal: z.ZodNumber;
        tax: z.ZodNumber;
        discount: z.ZodNumber;
        deliveryCharge: z.ZodNumber;
        payableAmount: z.ZodNumber;
    }, z.core.$strip>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type CartInput = z.infer<typeof cartValidationSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
declare const _default: {
    cartValidationSchema: z.ZodObject<{
        userId: z.ZodString;
        items: z.ZodArray<z.ZodObject<{
            productId: z.ZodString;
            brand: z.ZodString;
            name: z.ZodString;
            slug: z.ZodOptional<z.ZodString>;
            imageUrl: z.ZodOptional<z.ZodString>;
            quantity: z.ZodNumber;
            unitPrice: z.ZodNumber;
            originalPrice: z.ZodOptional<z.ZodNumber>;
            finalPrice: z.ZodNumber;
            stockAtTime: z.ZodOptional<z.ZodNumber>;
            maxAllowedPerOrder: z.ZodOptional<z.ZodNumber>;
        }, z.core.$strip>>;
        pricing: z.ZodObject<{
            subTotal: z.ZodNumber;
            tax: z.ZodNumber;
            discount: z.ZodNumber;
            deliveryCharge: z.ZodNumber;
            payableAmount: z.ZodNumber;
        }, z.core.$strip>;
        createdAt: z.ZodOptional<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
    }, z.core.$strip>;
    cartItemSchema: z.ZodObject<{
        productId: z.ZodString;
        brand: z.ZodString;
        name: z.ZodString;
        slug: z.ZodOptional<z.ZodString>;
        imageUrl: z.ZodOptional<z.ZodString>;
        quantity: z.ZodNumber;
        unitPrice: z.ZodNumber;
        originalPrice: z.ZodOptional<z.ZodNumber>;
        finalPrice: z.ZodNumber;
        stockAtTime: z.ZodOptional<z.ZodNumber>;
        maxAllowedPerOrder: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>;
};
export default _default;
//# sourceMappingURL=cartValidation.d.ts.map