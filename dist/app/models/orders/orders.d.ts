export type orderItem = {
    brand: string;
    name: string;
    quantity: number;
};
export type deliveryPartner = {
    delPartner: string;
    trackingId: string;
    expectedDeliveryTime: string;
    shippingStatus: string;
};
export type paymentInfo = {
    paymentMethod: string;
    paymentStatus: string;
    paymentGatewayId: string;
};
export type price = {
    price: number;
    tax: number;
    discountBySeller: number;
    deliveryCharge: number;
    finalAmount: number;
};
export type userDetails = {
    email: string;
    address: string;
    phoneNo: string;
    discountByCoupon?: number;
};
export type order = {
    orderId: string;
    items: orderItem[];
    user: userDetails;
    totalPrice: price;
    payment: paymentInfo;
    delivery: deliveryPartner;
    orderStatus: string;
    createdAt: Date;
    updatedAt: Date;
};
//# sourceMappingURL=orders.d.ts.map