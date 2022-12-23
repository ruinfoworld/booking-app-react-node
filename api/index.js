import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
dotenv.config();

const app = express();

const connection = async () => {
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!!!")
    }catch(error){
        throw error;
    }
}

// mongoose.connection.on("disconnected", () => {
//     console.log("mongoDB disconnected!!!")
// });

// mongoose.connection.on("connected", () => {
//     console.log("mongoDB connected!!!");
// });
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/hotels", hotelRoute);
app.use("/api/rooms", roomRoute);

app.listen(8800, () => {
    connection();
    console.log("Connected to backend!!!!")
});