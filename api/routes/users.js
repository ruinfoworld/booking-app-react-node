import express from "express";
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

//Update User
router.put("/:id", updateUser);

//Delete User
router.delete("/:id", deleteUser);

// Get User
router.get("/find/:id", getUser);

//Get all User
router.get("/", verifyToken, getAllUsers);

export default router;