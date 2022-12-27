import User from "../models/User.js"
export const registerUser = async (req,res,next) => {
    try{
        const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : req.body.password,
        });

        await newUser.save();
        return res.status(200).json("User has been registered successfully!!!");
    }catch(err){
        return next(err);
    }
}