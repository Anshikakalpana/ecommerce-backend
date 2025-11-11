import express from "express";
import { userController } from "../controllers/user.js";
import ratelimiter from "../middlewares/ratelimiter.js";
const router = express.Router();
router.post('/register', userController.registerUser); //working
router.post('/login/email', ratelimiter, userController.loginUserByEmail); //working
router.post('/login/number', ratelimiter, userController.loginUserByNumber); //working
router.post('/logout', userController.logout); //working
router.post('/alldevicelogout', userController.allDeviceLogout); //working
export const userRouter = router;
//# sourceMappingURL=userRoute.js.map