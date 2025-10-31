import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import dotenv from 'dotenv';
import { connectRedis } from './app/config/redis.js';
import { productRoute } from './app/routes/products/productRoute.js';
import { cartRoute } from './app/routes/cart/cartRoute.js';
import { userRouter } from './app/routes/users/userRoute.js';
const app = express();
const PORT = 3000;
dotenv.config();
app.use(cors());
app.use(express.json());
connectRedis();
app.get('/', (req, res) => {
    res.send('aaj jaane ki zid na kuuuu hi pehlu mein baithe raho');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use('/api/products', productRoute);
app.use('/api/cartitems', cartRoute);
app.use('/api/users', userRouter);
export default app;
//# sourceMappingURL=index.js.map