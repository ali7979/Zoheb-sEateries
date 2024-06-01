import express from "express";
import { addFood,listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";


//new
import {v2 as cloudinary} from 'cloudinary';


cloudinary.config({
    cloud_name: "devfrzibz",
    api_key: "859893649861859",
    api_secret: "IQ8p9fuGiQLloj-pu4oLbSnDrgU"
});



const uploadfile =async(filepath)=> 
    
    {

        try {
            const result = await cloudinary.uploader.upload(filepath);
            console.log(result)
            return result;
            
        } catch (error) {
            console.log(error)

        }
       
    }


//old

const foodRouter = express.Router();


//Image Storage Engine

//old

// const imgstorage=multer.diskStorage ({
//     destination:"uploads",
//     filename:(req,file,cb)=>
//     {
//         return cb(null,`${Date.now()}${file.originalname}`)
//     }
// })


const imgstorage=multer.diskStorage ({})

//changed
const upload =multer({storage:imgstorage})

foodRouter.post("/add",upload.single("image"),addFood);
foodRouter.get("/list",listFood);
foodRouter.post("/remove",removeFood);



// foodRouter.post("/add",addFood);


export default foodRouter;