import express from "express";
import { createHotel, deleteOrder, getAllHotels, getHotel, updateOrder } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateOrder);

//DELETE
router.delete("/:id", verifyAdmin, deleteOrder);

//GET SINGLE HOTEL
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotels); 

export default router;
