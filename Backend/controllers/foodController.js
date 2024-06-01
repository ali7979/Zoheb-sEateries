import foodModel from "../models/foodModel.js";
import fs from 'fs';          //File system package  predefined in node js 


const addFood = async (req,res )=>
    {
        let img_filename=`${req.file.filename}`;
        const food =await new foodModel({
            
            name:req.body.name,
            price:req.body.price,
            description: req.body.description,
            category: req.body.category,
            image:img_filename
        
        });
        try{
            await food.save();
            res.json({success:true,message:"Food Added"})
        }
        catch(error)
        {
            console.log(error)
            res.json({success:false,message:"Error"})
        }
    }

//retrieve food
const listFood = async (req,res )=>
    {
                try{
                    const foods =await foodModel.find({});
                    res.json({success:true,data:foods})
                    console.log(foods);

                }
                catch(error){
                console.log(error);
                res.json({success:false,message:"Error"})

                }

    }



//remove food

const removeFood = async (req,res)=>
    {
        try {
            const food =await foodModel.findById(req.body.id);
            //also need to delete the image for that item from uploads folder
            fs.unlink(`uploads/${food.image}`,()=>{})
            await foodModel.findByIdAndDelete(req.body.id);
            res.json({success:true,message:"Food Removed"})


        } catch (error) {
            console.log(error);
            res.json({success:false,message:"Error"})
        }
    }

export {addFood , listFood , removeFood}