import express from "express";
import { createHotel, deleteOrder, getAllHotels, getHotel, updateOrder } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post("/",createHotel);

//UPDATE
router.put("/:id", updateOrder);

//DELETE
router.delete("/:id", deleteOrder);

//GET SINGLE HOTEL
router.get("/find/:id", getHotel);

//GET ALL
router.get("/", getAllHotels); 

export default router;
