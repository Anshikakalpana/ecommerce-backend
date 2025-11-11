import type { cartItem } from "../models/cart/cart.js";
export declare const service: {
    productToCart: (userId: string, productData: cartItem) => Promise<import("mongoose").Document<unknown, {}, import("../models/cart/cart.js").cart, {}, import("mongoose").DefaultSchemaOptions> & import("../models/cart/cart.js").cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getCart: (userId: string) => Promise<any>;
    deleteProductFromCart: (userId: string, productId: string) => Promise<{
        message: string;
        success: boolean;
        data?: never;
    } | {
        success: boolean;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../models/cart/cart.js").cart, {}, import("mongoose").DefaultSchemaOptions> & import("../models/cart/cart.js").cart & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    } | null>;
};
//# sourceMappingURL=cartService.d.ts.map