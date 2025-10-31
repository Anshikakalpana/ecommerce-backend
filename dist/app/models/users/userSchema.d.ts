import mongoose from "mongoose";
declare const _default: mongoose.Model<{
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
}, {}, mongoose.DefaultSchemaOptions> & {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
}>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<{
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: mongoose.Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }> & {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }>;
    emailVerified: boolean;
    subscription?: {
        isActive: boolean;
        startDate?: NativeDate | null;
        endDate?: NativeDate | null;
        paymentMethod?: "credit_card" | "upi" | "paypal" | "cod" | null;
        paymentStatus?: "pending" | "paid" | "failed" | "refunded" | null;
        paymentId?: string | null;
        amount?: number | null;
    } | null;
    sellerDetails?: {
        businessType: "individual" | "company";
        businessName: string;
        gstin: string;
        verified: boolean;
    } | null;
    lastLogin?: NativeDate | null;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default _default;
//# sourceMappingURL=userSchema.d.ts.map