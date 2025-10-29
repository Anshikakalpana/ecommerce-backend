import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps, {}, {
    timestamps: true;
}> & {
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
}>> & mongoose.FlatRecord<{
    brand: string;
    name: string;
    slug: string;
    price: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
    variants: mongoose.Types.DocumentArray<{
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }> & {
        variantid: string;
        variantName: string;
        additionalPrice: number;
        stock: number;
        color: string;
        size: string;
    }>;
    comments: mongoose.Types.DocumentArray<{
        date: NativeDate;
        userid: string;
        rating: number;
        images: string[];
        comment?: string | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
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
    status: "active" | "inactive" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=productSchema.d.ts.map