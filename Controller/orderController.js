// all models
import Order from "../Model/orderFood.js";
import Food from "../Model/foodModel.js";
import OrderCart from "../Model/orderCart.js";
import User from "../Model/userModel.js";

let orderPlace = async (req,res)=>{

   
    if(res.locals.currentUser){
    let orderData = await Order.find({customerDetails: res.locals.currentUser["_id"]}).populate('orderItem');
    let cartData = await OrderCart.find({customerDetails: res.locals.currentUser["_id"]}).populate('cart');
    
    res.render("Order/order.ejs", {cartData , orderData});
    }
    
   
};

let orderCompleted = async (req,res,next)=>{
    try {
        
            let {id: cartId} = req.params;
            
            let cartData = await OrderCart.findById(cartId).populate("cart");
            
            let userId = res.locals.currentUser["_id"];

            let newOrder = new Order({
                customerDetails: userId,
                orderItem: cartData.cart["_id"],
            });

            let orderSaved = await newOrder.save();


            // adding order to user data
            await User.findByIdAndUpdate(userId, {$push: {order: orderSaved["_id"]}},{runValidators: true});
           

            // removing cart item
            await OrderCart.findByIdAndDelete(cartId);
            await User.findByIdAndUpdate(userId, {$pull: {orderCart: {$in: [cartId]}}});

            req.flash('success', 'Order placed successfully! Your delicious meal is on its way.');
            res.redirect('/order');
    } catch (error) {
        req.flash('error', 'Failed to place order. Please try again later.');
        next(error);
    }
};

let cartItems = async (req,res,next)=>{

    try {
        let {id} = req.params;
        let foodItem = await Food.findById(id);
        
        let cartSaved = await new OrderCart({
            customerDetails: res.locals.currentUser["_id"],
            cart: foodItem["_id"]
        }).save();


        // adding cart to user data
        await User.findByIdAndUpdate(res.locals.currentUser["_id"], {$push: {orderCart: cartSaved["_id"]}},{runValidators: true});
        
    
        req.flash('success', 'Food item successfully added to your cart!');
        res.redirect('/menu');
        
    } catch (error) {
        req.flash('error','Item successfully removed from your cart.');
        next(error);
    }
}

let cartItemRemove = async (req,res,next) =>{
    try {
        let {id} = req.params;

        let removed = await OrderCart.findByIdAndDelete(id);

        

        // removing cart item from user
        let result = await User.findByIdAndUpdate(res.locals.currentUser["_id"], {$pull: {orderCart: {$in: [removed["_id"]]}}});
        
        

        req.flash('success', 'Food item successfully removed from your cart.');
        res.redirect("/order");

    } catch (error) {
        req.flash('error', 'Failed to remove food item from cart. Please try again later.');
        next(error);
    }

}


export {orderPlace,orderCompleted , cartItems ,cartItemRemove};