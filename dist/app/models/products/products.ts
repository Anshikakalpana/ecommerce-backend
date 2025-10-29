export type product={
    productid:string;
    brand:string;
    name:string;
    price:number;
    description:string;
    category:string;
    imageUrl:string[];
    tags:string[];
    variants: productVariant[];
    comments: productComment[];
    ingredients?:string[];
    
}
export type productVariant={
    variantid:string;
    variantName:string;
    additionalPrice:number;
    stock:number;
    color:string;
    size:string;
}

export type productComment={
    userid:string;
    rating:number;
    comment:string;
    date:Date;
    images?:string[];
}
