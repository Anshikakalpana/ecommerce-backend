import mongoose from "mongoose";
declare const _default: mongoose.Model<{
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
    status: "inactive" | "active" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps, {}, {}, {}, mongoose.Document<unknown, {}, {
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
    status: "inactive" | "active" | "out_of_stock";
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
    status: "inactive" | "active" | "out_of_stock";
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
    status: "inactive" | "active" | "out_of_stock";
    skinType: string[];
    sellerId?: string | null;
    returnPolicy?: string | null;
    warranty?: string | null;
    shippingInfo?: string | null;
    shelfLife?: string | null;
    netQuantity?: string | null;
    originCountry?: string | null;
} & mongoose.DefaultTimestampProps, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
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
    status: "inactive" | "active" | "out_of_stock";
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
    status: "inactive" | "active" | "out_of_stock";
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