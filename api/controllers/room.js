import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelId;
  const newRoom = new Room(req.body);
  try {
    const saveRooms = await newRoom.save();
    await Hotel.findByIdAndUpdate(
      hotelId,
      {
        $push: {
          rooms: saveRooms._id,
        },
      }
    );
    return res.status(200).json(newRoom);
  } catch (err) {
    return next(err);
  }
};

export const updateRoom = async (req,res,next) => {
    const roomId = req.params.id;
    try{
        const updatedRoom = await Room.findByIdAndUpdate(roomId,{
            $set : req.body
        }, {
            new : true
        });
        return res.status(200).json(updatedRoom)
    }catch(err){
        return next(err);
    }
}

export const deleteRoom = async(req,res,next) => {
    const roomId = req.params.id;
    const hotelId = req.params.hotelId;
    try{
        await Room.findByIdAndDelete(roomId);
        await Hotel.findByIdAndUpdate(hotelId, {
            $pull : {
                rooms : roomId
            }
        })
        return res.status(200).json("Room has been deleted!!!");
    }catch(err){
        return next(err);
    }
}

export const getRoom = async(req,res,next) => {
    try{
        const roomData = await Room.findById(req.params.id);
        return res.status(200).json(roomData);
    }catch(err){
        return next(err)
    }
}

export const getRooms = async(req,res,next) => {
    try{
        const roomsData = await Room.find();
        return res.status(200).json(roomsData);
    }catch(err){
        return next(err)
    }
}
