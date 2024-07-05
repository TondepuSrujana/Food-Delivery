import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://srujanatondepu:Sruji.17@cluster0.peu5fva.mongodb.net/food-delivery').then(()=> console.log("DB Connected"));
}
