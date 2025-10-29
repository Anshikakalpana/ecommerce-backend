// import app from "./index.js";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// dotenv.config();
// async function database(){
//   await mongoose.connect('process.env.MONGODB_URL');
// app.listen(process.env.PORT || 3000, () => {
//   console.log(`Server is running on port ${process.env.PORT || 3000}`);
// });
// }
// database();
import app from "./index.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
async function database() {
    try {
        if (!process.env.MONGO_URL) {
            throw new Error("MONGO_URL is not defined in .env");
        }
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected successfully");
        app.listen(process.env.PORT || 3000, () => {
            console.log(`Server is running on port ${process.env.PORT || 3000}`);
        });
    }
    catch (error) {
        console.error("Database connection failed:", error);
    }
}
database();
//# sourceMappingURL=server.js.map