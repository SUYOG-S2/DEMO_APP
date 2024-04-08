import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

export default async function Connection(){
    try{
        await mongoose.connect(process.env.S2URI)
        console.log("connected to MongoDB")
    }catch(error){
        console.log(error)
    }
}