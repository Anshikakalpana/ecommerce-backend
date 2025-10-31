import { z } from "zod";
export const AddressSchema = z.object({
    street: z.string().min(1),
    city: z.string().min(1),
    state: z.string().min(1),
    zipCode: z.string().min(1),
    country: z.string().min(1),
});
export const SubscriptionStatusSchema = z.object({
    isActive: z.boolean().default(false),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    paymentMethod: z.enum(["credit_card", "upi", "paypal", "cod"]).optional(),
    paymentStatus: z.enum(["pending", "paid", "failed", "refunded"]).optional(),
    paymentId: z.string().optional(),
    amount: z.number().optional(),
});
export const SellerDetailsSchema = z.object({
    businessType: z.enum(["individual", "company"]),
    businessName: z.string().min(1),
    gstin: z.string().min(1),
    verified: z.boolean().default(false).optional(),
});
export const UserValidationSchema = z
    .object({
    id: z.string(),
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(6),
    phoneNo: z.string().min(10),
    address: z.array(AddressSchema).nonempty(),
    role: z.enum(["buyer", "seller", "admin", "customer_service"]),
    subscription: SubscriptionStatusSchema.optional(),
    sellerDetails: SellerDetailsSchema.optional(),
    emailVerified: z.boolean().default(false).optional(),
    lastLogin: z.date().optional(),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
})
    .refine((data) => (data.role === "buyer" && data.subscription !== undefined) ||
    (data.role !== "buyer" && data.subscription === undefined) ||
    true, { message: "Only buyers can have subscriptions" })
    .refine((data) => (data.role === "seller" && data.sellerDetails !== undefined) ||
    (data.role !== "seller" && data.sellerDetails === undefined) ||
    true, { message: "Only sellers can have sellerDetails" })
    .strict();
export default UserValidationSchema;
//# sourceMappingURL=userValidation.js.map