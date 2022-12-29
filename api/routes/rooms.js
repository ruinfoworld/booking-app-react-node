import express from "express";
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE ROOM
router.post("/:hotelId",verifyAdmin, createRoom);

//Update Room
router.put("/:id", verifyAdmin, updateRoom)

//Delete Room
router.delete("/:id/:hotelId",verifyAdmin, deleteRoom)

//Get Room
router.get("/find/:id",getRoom)

//Get All Rooms
router.get("/",getRooms)

export default router;