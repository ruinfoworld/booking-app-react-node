import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
export const registerUser = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    return res.status(200).json("User has been registered successfully!!!");
  } catch (err) {
    return next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const userdata = await User.findOne({ username: req.body.username });
    if (!userdata) return next(createError(404, "User not found!!"));
    const isPasswordMatched = await bcrypt.compare(
      req.body.password,
      userdata?.password
    );
    if (!isPasswordMatched)
      return next(createError(400, "Wrong username or password!"));

    const { password, isAdmin, ...otherDetails } = userdata._doc;

    const token = jwt.sign(
      { id: userdata._id, isAdmin: userdata.isAdmin },
      process.env.JWT_KEY
    );

    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json(otherDetails);
  } catch (err) {
    next(err);
  }
};
