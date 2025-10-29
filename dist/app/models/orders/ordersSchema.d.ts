import mongoose from "mongoose";
import { type order } from "./orders.js";
export declare const OrderModel: mongoose.Model<order, {}, {}, {}, mongoose.Document<unknown, {}, order, {}, mongoose.DefaultSchemaOptions> & order & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<order, mongoose.Model<order, any, any, any, mongoose.Document<unknown, any, order, any, {}> & order & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, order, mongoose.Document<unknown, {}, mongoose.FlatRecord<order>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<order> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=ordersSchema.d.ts.map