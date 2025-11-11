export type product = {

    brand: string;
    name: string;
    slug: string;
    price: number;
    // discount?: number;
    finalPrice: number;
    description: string;
    category: string;
    imageUrl: string[];
    tags: string[];
    inStock: boolean;
    totalReviews: number;
    averageRating: number;
   
    comments?: productComment[];
    ingredients?: string[];
    sku: string;
    isFeatured?: boolean;
    isNewArrival?: boolean;
    status: 'active' | 'inactive' | 'out_of_stock';
    createdAt?: Date;
    updatedAt?: Date;
    sellerId?: string;
    returnPolicy?: string;
    warranty?: string;
    shippingInfo?: string;
    shelfLife?: string;
    skinType?: string[];
    netQuantity?: string;
    originCountry?: string;
};



export type productComment= {
  userid: string;
  rating: number;
  comment?: string | undefined;
  date?: Date | undefined;  
  images?: string[] | undefined;
}

