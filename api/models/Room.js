import mongoose from "mongoose";

const RoomSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    price : {
        type: Number,
        require : true
    },
    desc : {
        type : String,
        require : true
    },
    maxPeople : {
        type : Number,
        require : true
    },
    roomNumbers : [{
        number : Number,
        unavailableDates : {
            type : [Date]
        }
    }]
});
export default mongoose.model("Rooms", RoomSchema);