// all models
import Order from "../Model/orderFood.js";
import Food from "../Model/foodModel.js";
import OrderCart from "../Model/orderCart.js";

let orderPlace = async (req,res)=>{

    let cartData = await OrderCart.find().populate("cart");
    let orderData = await Order.find().populate("orderItem");
    
    res.render("Order/order.ejs", {cartData , orderData});
};

let orderCompleted = async (req,res,next)=>{
    try {
        
            let {id: cartId} = req.params;
            
            let cartData = await OrderCart.findById(cartId).populate("cart");
            

            let newOrder = new Order({
                orderItem: cartData.cart["_id"],
            });

            await newOrder.save();

            // removing cart item

            await OrderCart.findByIdAndDelete(cartId);

            res.redirect('/order');
    } catch (error) {
        next(error);
    }
};

let cartItems = async (req,res,next)=>{

    try {
        let {id} = req.params;
        let foodItem = await Food.findById(id);
        
        let result = await new OrderCart({
            cart: foodItem["_id"]
        }).save();
        
    
        res.redirect('/menu');
        
    } catch (error) {
        next(error);
    }
}

let cartItemRemove = async (req,res,next) =>{
    try {
        let {id} = req.params;

        await OrderCart.findByIdAndDelete(id);
        
        res.redirect("/order");

    } catch (error) {
        next(error);
    }

}


export {orderPlace,orderCompleted , cartItems ,cartItemRemove};