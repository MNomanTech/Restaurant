// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});



// Controllers import



// all menu routes

router.route('/')
.get(orderPlace)
.post(orderPlaced);

router.route('/:id')
.put(cancelOrder);