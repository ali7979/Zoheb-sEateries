import mongoose from "mongoose";

export const connectDB = async ()=>
    {
        await mongoose.connect('mongodb+srv://zohebzob:fIjtvmdVL2wUwzRq@cluster0.u4armwj.mongodb.net/FoodApp').then(

        ()=>{
            console.log( "DB Connected")
        }
        )
    }