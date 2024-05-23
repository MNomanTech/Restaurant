// all models
import Order from "../Model/orderFood.js";
import Food from "../Model/foodModel.js";
import OrderCart from "../Model/orderCart.js";

let orderPlace = async (req,res)=>{

    let cartData = await OrderCart.find().populate("cart");
    // let orderData = await Order.find();
    
    
    res.render("Order/order.ejs", {cartData});
};

let orderCompleted = async (req,res)=>{
    let {id: cartId} = req.params;
    
    let cartData = await OrderCart.findById(cartId).populate("cart");
    

    let newOrder = new Order();

    newOrder.orderItem.push(cartData.cart["_id"]);

    await newOrder.save();

    
    
};

let cartItems = async (req,res)=>{
    let {id} = req.params;
    let foodItem = await Food.findById(id);
    
    let result = await new OrderCart({
        cart: foodItem["_id"]
    }).save();
    console.log(result);
}

let cartItemRemove = async (req,res) =>{
    let {id} = req.params;

    await OrderCart.findByIdAndDelete(id);
    
    res.redirect("/order");
}


export {orderPlace,orderCompleted , cartItems ,cartItemRemove};