import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//Update User
router.put("/:id", verifyUser, updateUser);

//Delete User
router.delete("/:id", verifyUser, deleteUser);

// Get User
router.get("/find/:id", verifyUser, getUser);

//Get all User
router.get("/", verifyAdmin, getAllUsers);

export default router;