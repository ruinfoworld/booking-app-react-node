import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//CREATE

router.post("/", async (req, res) => {
  const newHotels = new Hotel(req.body);
  try {
    const hotesData = await newHotels.save();
    return res.status(200).json(hotesData);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//UPDATE

router.put("/:id", async (req, res) => {
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
    return res.status(500).json(err);
  }
});
//DELETE

router.delete("/:id", async (req,res) => {
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        return res.status(200).json("Hotel has been deleted successfully!!!!");
    }catch(err){
        return res.status(500).json(err);
    }
});

//GET SINGLE HOTEL
router.get("/find/:id", async (req,res) => {
    try{
        const hotelsData = await Hotel.findById(req.params.id);
        if(!hotelsData) return res.status(500).json("Hotels doeas not exist!!!");
        return res.status(200).json(hotelsData);
    }catch(err){
        return res.status(500).json(err);
    }
});
//GET ALL

router.get("/", async (req,res) => {
    try{    
        const hotelData = await Hotel.find();
        return res.status(200).json(hotelData);
    }catch(err){
        return res.status(500).json(err);
    }
}); 

export default router;
