import type { cartItem } from "../models/cart/cart.js";
export declare const service: {
    productToCart: (productData: cartItem) => Promise<import("mongoose").Document<unknown, {}, import("../models/cart/cart.js").cart, {}, import("mongoose").DefaultSchemaOptions> & import("../models/cart/cart.js").cart & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
};
//# sourceMappingURL=cartService.d.ts.map