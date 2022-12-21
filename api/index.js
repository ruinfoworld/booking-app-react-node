import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

app.listen(8800, () => {
    connection();
    console.log("Connected to backend!!!!")
});