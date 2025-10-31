import mongoose, { Schema } from "mongoose";



const AddressSchema= new Schema(
    {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zipCode: { type: String, required: true },
        country: { type: String, required: true }
    },
    { _id: false }
)

const SubscriptionStatusSchema = new Schema(
    {
        isActive: { type: Boolean, default: false },
        startDate: { type: Date },
        endDate: { type: Date },
        paymentMethod: { type: String, enum: ["credit_card", "upi", "paypal", "cod"] },
        paymentStatus: { type: String, enum: ["pending", "paid", "failed", "refunded"] },
        paymentId: { type: String },
        amount: { type: Number }
    },
    { _id: false }
)

const SellerDetailsSchema = new Schema(
    {
        businessType: { type: String, enum: ["individual", "company"], required: true },
        businessName: { type: String, required: true },
        gstin: { type: String, required: true },
        verified: { type: Boolean, default: false }
    },
    { _id: false }
)


const  userSchema = new Schema(
    {
        id: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        phoneNo: { type: String, required: true },
        address: { type: [AddressSchema], required: true },
        role: { type: String, enum: ["buyer", "seller", "admin", "customer_service"], required: true },
        subscription: { type: SubscriptionStatusSchema },
        sellerDetails: { type: SellerDetailsSchema },
        emailVerified: { type: Boolean, default: false },
        lastLogin: { type: Date },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    }
)

export default mongoose.model("User", userSchema);