// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});


// Controllers import
import { orderPlace,orderCompleted, cartItems, cartItemRemove } from "../Controller/orderController.js";

// login middleware 
import isLoggedIn from "../Middlewares/isLogin.js";


// all order routes

router.route('/')
.get(orderPlace);

router.route('/:id')
.post(orderCompleted);


// all cart routes 
router.route('/cart/:id')
.post(cartItems)
.delete(cartItemRemove);


router.use((err,req,res,next)=>{

    res.redirect(req.originalUrl);
});

export default router;