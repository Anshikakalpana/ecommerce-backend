export type cart = {
    userId: string;
    items: cartItem[];
    pricing: cartPricing;
    createdAt: Date;
    updatedAt: Date;
};
export type cartItem = {
    productId: string;
    brand: string;
    name: string;
    slug?: string | undefined;
    imageUrl?: string | undefined;
    quantity: number;
    unitPrice: number;
    originalPrice?: number | undefined;
    finalPrice: number;
    stockAtTime?: number | undefined;
    maxAllowedPerOrder?: number | undefined;
};
export type cartPricing = {
    subTotal: number;
    tax: number;
    discount: number;
    deliveryCharge: number;
    payableAmount: number;
};
//# sourceMappingURL=cart.d.ts.map