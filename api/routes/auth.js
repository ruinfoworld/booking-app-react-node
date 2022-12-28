import express from "express";
import { login, registerUser } from "../controllers/auth.js";

const router = express.Router();

//Register a new user
router.post("/register", registerUser);

//Login 
router.post("/login", login)

export default router;