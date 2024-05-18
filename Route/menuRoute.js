// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});


// Controllers import
import {
    getFoodItems,
    addFoodItem,
    updateFoodItem,
    deleteFoodItem,
} from "../Controller/menuController.js";


// all menu routes
router.route("/")
.get(getFoodItems)
.post(addFoodItem);

router.route("/:id")
.put(updateFoodItem )
.delete( deleteFoodItem);

export default router;