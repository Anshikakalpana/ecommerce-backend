import type { product } from "../models/products/products.js";
export declare const service: {
    producttodb: (productData: Partial<product>) => Promise<import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getAllProductsFromDb: () => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getProductByIdFromDb: (productId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    getProductBySearchFromDb: (searchterm: string) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    updateInDb: (productId: string, updateData: Partial<product>) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteFromDb: (productId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps, {}, {
        timestamps: true;
    }> & {
        name: string;
        description: string;
        brand: string;
        slug: string;
        price: number;
        finalPrice: number;
        category: string;
        imageUrl: string[];
        tags: string[];
        inStock: boolean;
        totalReviews: number;
        averageRating: number;
        variants: import("mongoose").Types.DocumentArray<{
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }> & {
            size: string;
            variantid: string;
            variantName: string;
            additionalPrice: number;
            stock: number;
            color: string;
        }>;
        comments: import("mongoose").Types.DocumentArray<{
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }> & {
            date: NativeDate;
            userid: string;
            rating: number;
            images: string[];
            comment?: string | null;
        }>;
        ingredients: string[];
        sku: string;
        isFeatured: boolean;
        isNewArrival: boolean;
        status: "inactive" | "active" | "out_of_stock";
        skinType: string[];
        sellerId?: string | null;
        returnPolicy?: string | null;
        warranty?: string | null;
        shippingInfo?: string | null;
        shelfLife?: string | null;
        netQuantity?: string | null;
        originCountry?: string | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=productservice.d.ts.map