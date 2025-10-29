import express from 'express';
import cors from 'cors';
import { productRoute } from './app/routes/products/productRoute.js';
import { cartRoute } from './app/routes/cart/cartRoute.js';
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('aaj jaane ki zid na kuuuu hi pehlu mein baithe raho');
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
app.use('/api/products', productRoute);
app.use('/api/cartitems', cartRoute);
export default app;
//# sourceMappingURL=index.js.map