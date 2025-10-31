import type { UserType } from "../models/users/userValidation.js";
export declare const userToDb: (userData: UserType) => Promise<{
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    phoneNo: string;
    address: import("mongoose").Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
    __v: number;
}>;
export declare const updateUser: (userId: string, updatedUser: Partial<UserType>) => Promise<(import("mongoose").Document<unknown, {}, {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: import("mongoose").Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
}, {}, import("mongoose").DefaultSchemaOptions> & {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: import("mongoose").Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const deleteUser: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: import("mongoose").Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
}, {}, import("mongoose").DefaultSchemaOptions> & {
    role: "buyer" | "seller" | "admin" | "customer_service";
    name: string;
    id: string;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    email: string;
    password: string;
    phoneNo: string;
    address: import("mongoose").Types.DocumentArray<{
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}) | null>;
export declare const service: {
    userToDb: (userData: UserType) => Promise<{
        role: "buyer" | "seller" | "admin" | "customer_service";
        name: string;
        id: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        email: string;
        phoneNo: string;
        address: import("mongoose").Types.DocumentArray<{
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
        __v: number;
    }>;
    updateUser: (userId: string, updatedUser: Partial<UserType>) => Promise<(import("mongoose").Document<unknown, {}, {
        role: "buyer" | "seller" | "admin" | "customer_service";
        name: string;
        id: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        email: string;
        password: string;
        phoneNo: string;
        address: import("mongoose").Types.DocumentArray<{
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        role: "buyer" | "seller" | "admin" | "customer_service";
        name: string;
        id: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        email: string;
        password: string;
        phoneNo: string;
        address: import("mongoose").Types.DocumentArray<{
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
    deleteUser: (userId: string) => Promise<(import("mongoose").Document<unknown, {}, {
        role: "buyer" | "seller" | "admin" | "customer_service";
        name: string;
        id: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        email: string;
        password: string;
        phoneNo: string;
        address: import("mongoose").Types.DocumentArray<{
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
    }, {}, import("mongoose").DefaultSchemaOptions> & {
        role: "buyer" | "seller" | "admin" | "customer_service";
        name: string;
        id: string;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        email: string;
        password: string;
        phoneNo: string;
        address: import("mongoose").Types.DocumentArray<{
            street: string;
            city: string;
            state: string;
            zipCode: string;
            country: string;
        }, import("mongoose").Types.Subdocument<import("bson").ObjectId, any, {
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
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }) | null>;
};
//# sourceMappingURL=userService.d.ts.map