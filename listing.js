const mongoose=require("mongoose");
const review = require("./review");
const Schema=mongoose.Schema;

const listingSchema=new Schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:{
        type:String,
        default:"https://unsplash.com/photos/a-white-cell-phone-with-a-blank-screen-ZfQUwQsG1QY",
        set:(v)=>v===""?"https://unsplash.com/photos/a-white-cell-phone-with-a-blank-screen-ZfQUwQsG1QY":v,
    },
    price:{
        type:Number,
        required:true,
    },
    location:String,
    country:String,
    reviews:[
    {
        type:Schema.Types.ObjectId,
        ref:"Review",
    },
],
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;  