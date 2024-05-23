// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});


// Controllers import
import { orderPlace,orderCompleted, cartItems, cartItemRemove } from "../Controller/orderController.js";


// all order routes

router.route('/')
.get(orderPlace);

router.route('/:id')
.post(orderCompleted);

router.route('/cart/:id')
.post(cartItems)
.delete(cartItemRemove);


export default router;