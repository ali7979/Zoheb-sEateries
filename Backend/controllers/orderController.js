// import { verify } from "jsonwebtoken";
import orderModel from "../models/orderModel.js";
import userModel from "../models/orderModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//placing user order

const placeOrder = async (req, res) => {
  const frontendurl = "https://zoheb-s-eateries-frontend.vercel.app";
  console.log("inside placeorder")
  try {
    const newOrder = new orderModel({
      userId: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
      address: req.body.address,


    });
    await newOrder.save();
    await userModel.findByIdAndUpdate(req.body.userId, { cartData: {} });

    const lineItems = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    lineItems.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: 35 * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `${frontendurl}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${frontendurl}/verify?success=false&orderId=${newOrder._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ success: false, mesage: error });
  }
};

const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success == "true") 
        {
      await userModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Payment Successfull" });
    } 
    else 
    {
      await userModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch
  (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });

  }
};


//users Orders 
const userOrders = async(req,res)=>
  {
try {
  const orders = await orderModel.find({userId:req.body.userId});
  res.json({success:true,data:orders});
} catch (error) {
  console.log(error)
  res.json({success:false,message:"Error"})
}
}



const adminOrders = async(req,res)=>
  {
try {
  const orders = await orderModel.find();
  res.json({success:true,data:orders});
} catch (error) {
  console.log(error)
  res.json({success:false,message:"Error"})
}
}

export { placeOrder, verifyOrder,userOrders,adminOrders };
