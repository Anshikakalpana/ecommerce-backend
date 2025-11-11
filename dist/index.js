import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json" with { type: "json" };
import { connectRedis } from './app/config/redis.js';
import { productRoute } from './app/routes/productRoute.js';
import { cartRoute } from './app/routes/cartRoute.js';
import { userRouter } from './app/routes/userRoute.js';
const app = express();
app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
const PORT = 3000;
dotenv.config();
app.use(cors());
app.use(cookieParser());
connectRedis();
app.get('/', (req, res) => {
    res.send('fuckk off');
});
app.use('/api/products', productRoute);
app.use('/api/cartitems', cartRoute);
app.use('/api/users', userRouter);
export default app;
//# sourceMappingURL=index.js.map