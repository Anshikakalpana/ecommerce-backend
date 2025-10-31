import { z } from "zod";
export declare const AddressSchema: z.ZodObject<{
    street: z.ZodString;
    city: z.ZodString;
    state: z.ZodString;
    zipCode: z.ZodString;
    country: z.ZodString;
}, z.core.$strip>;
export declare const SubscriptionStatusSchema: z.ZodObject<{
    isActive: z.ZodDefault<z.ZodBoolean>;
    startDate: z.ZodOptional<z.ZodDate>;
    endDate: z.ZodOptional<z.ZodDate>;
    paymentMethod: z.ZodOptional<z.ZodEnum<{
        credit_card: "credit_card";
        upi: "upi";
        paypal: "paypal";
        cod: "cod";
    }>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<{
        pending: "pending";
        paid: "paid";
        failed: "failed";
        refunded: "refunded";
    }>>;
    paymentId: z.ZodOptional<z.ZodString>;
    amount: z.ZodOptional<z.ZodNumber>;
}, z.core.$strip>;
export declare const SellerDetailsSchema: z.ZodObject<{
    businessType: z.ZodEnum<{
        individual: "individual";
        company: "company";
    }>;
    businessName: z.ZodString;
    gstin: z.ZodString;
    verified: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
}, z.core.$strip>;
export declare const UserValidationSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    phoneNo: z.ZodString;
    address: z.ZodArray<z.ZodObject<{
        street: z.ZodString;
        city: z.ZodString;
        state: z.ZodString;
        zipCode: z.ZodString;
        country: z.ZodString;
    }, z.core.$strip>>;
    role: z.ZodEnum<{
        buyer: "buyer";
        seller: "seller";
        admin: "admin";
        customer_service: "customer_service";
    }>;
    subscription: z.ZodOptional<z.ZodObject<{
        isActive: z.ZodDefault<z.ZodBoolean>;
        startDate: z.ZodOptional<z.ZodDate>;
        endDate: z.ZodOptional<z.ZodDate>;
        paymentMethod: z.ZodOptional<z.ZodEnum<{
            credit_card: "credit_card";
            upi: "upi";
            paypal: "paypal";
            cod: "cod";
        }>>;
        paymentStatus: z.ZodOptional<z.ZodEnum<{
            pending: "pending";
            paid: "paid";
            failed: "failed";
            refunded: "refunded";
        }>>;
        paymentId: z.ZodOptional<z.ZodString>;
        amount: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strip>>;
    sellerDetails: z.ZodOptional<z.ZodObject<{
        businessType: z.ZodEnum<{
            individual: "individual";
            company: "company";
        }>;
        businessName: z.ZodString;
        gstin: z.ZodString;
        verified: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    }, z.core.$strip>>;
    emailVerified: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    lastLogin: z.ZodOptional<z.ZodDate>;
    createdAt: z.ZodDefault<z.ZodDate>;
    updatedAt: z.ZodDefault<z.ZodDate>;
}, z.core.$strict>;
export type UserType = z.infer<typeof UserValidationSchema>;
export default UserValidationSchema;
//# sourceMappingURL=userValidation.d.ts.map