import express from "express";
import { userController } from "../../controllers/user.js";
import ratelimiter from "../../middlewares/ratelimiter.js";
const router = express.Router();
router.post('/register', userController.registerUser);
router.post('/login/email', userController.loginUserByEmail);
router.post('/login/number', ratelimiter, userController.loginUserByNumber);
export const userRouter = router;
//# sourceMappingURL=userRoute.js.map