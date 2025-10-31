export type UserSchema = {
  id: string;
  name: string;
  email: string;
  password: string;
  phoneNo: string;
  address: Address[];

  role: "buyer" | "seller" | "admin" | "customer_service";
  subscription?: SubscriptionStatus; 
  sellerDetails?: SellerDetails; 

  emailVerified?: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
};



export type Address = {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

export type SubscriptionStatus = {
  isActive: boolean;
  startDate?: Date;
  endDate?: Date;
  paymentMethod?: "credit_card" | "upi" | "paypal" | "cod";
  paymentStatus?: "pending" | "paid" | "failed" | "refunded";
  paymentId?: string;
  amount?: number;
};

export type SellerDetails = {
  businessType: "individual" | "company";
  businessName: string;
  gstin: string;
  verified?: boolean;
};


