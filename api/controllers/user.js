import User from "../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return next(err);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json("User has been deleted successfully!!!!");
  } catch (err) {
    return next(err);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const usersData = await User.findById(req.params.id);
    if (!usersData) return next(createUser(404,"Users does not exist!!!"));
    return res.status(200).json(usersData);
  } catch (err) {
    return next(err);
  }
};

export const getAllUsers = async (req,res,next) => {
    try{    
        const userData = await User.find();
        return res.status(200).json(userData);
    }catch(err){
        return next(err);
    }
}