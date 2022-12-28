import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res, next) => {
  const newHotels = new Hotel(req.body);
  try {
    const hotesData = await newHotels.save();
    return res.status(200).json(hotesData);
  } catch (err) {
    return next(err);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const updatedHotes = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    return res.status(200).json(updatedHotes);
  } catch (err) {
    return next(err);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    return res.status(200).json("Hotel has been deleted successfully!!!!");
  } catch (err) {
    return next(err);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotelsData = await Hotel.findById(req.params.id);
    if (!hotelsData) return next("Hotels does not exist!!!");
    return res.status(200).json(hotelsData);
  } catch (err) {
    return next(err);
  }
};

export const getAllHotels = async (req,res,next) => {
    try{    
        const hotelData = await Hotel.find();
        return res.status(200).json(hotelData);
    }catch(err){
        return next(err);
    }
}