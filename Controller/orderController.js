import Order from "../Model/orderFood.js";

let orderPlace = async (req,res)=>{
    console.log("get order route");
};

let orderPlaced = async (req,res)=>{
    console.log("post order route");
};


let cancelOrder = async (req,res) =>{
    let {id: orderId} = req.params;

    let result = await Order.findByIdAndUpdate(orderId, {status: "Cancelled"});
    console.log(result);
};