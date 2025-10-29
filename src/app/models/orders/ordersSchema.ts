import mongoose, { Schema, Document } from "mongoose";
import { type order ,type userDetails, type paymentInfo , type price, type deliveryPartner ,type orderItem} from "./orders.js";
// OrderItem
const orderItemSchema = new Schema<orderItem>({
  brand: { type: String, required: true },
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

// Delivery Partner
const deliveryPartnerSchema = new Schema<deliveryPartner>({
  delPartner: { type: String, required: true },
  trackingId: { type: String, required: true },
  expectedDeliveryTime: { type: String, required: true },
  shippingStatus: { type: String, required: true },
});

// Payment Info
const paymentInfoSchema = new Schema<paymentInfo>({
  paymentMethod: { type: String, required: true },
  paymentStatus: { type: String, required: true }, // ✅ spelling fixed
  paymentGatewayId: { type: String, required: true },
});

// Price
const priceSchema = new Schema<price>({
  price: { type: Number, required: true },
  tax: { type: Number, required: true },
  discountBySeller: { type: Number, required: true },
  deliveryCharge: { type: Number, required: true },
  finalAmount: { type: Number, required: true },
});

// User details
const userDetailsSchema = new Schema<userDetails>({
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNo: { type: String, required: true },
  discountByCoupon: { type: Number, required: false },
});

// Main Order schema
const orderSchema = new Schema<order>({
  orderId: { type: String, required: true, unique: true },
  items: { type: [orderItemSchema], required: true },
  user: { type: userDetailsSchema, required: true },
  totalPrice: { type: priceSchema, required: true },
  payment: { type: paymentInfoSchema, required: true },
  delivery: { type: deliveryPartnerSchema, required: true },
  orderStatus: { type: String, required: true },
}, { timestamps: true });

export const OrderModel = mongoose.model("Order", orderSchema);


