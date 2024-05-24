// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});


// Controllers import
import {
    getFoodItems,
    ownerPage,
    addFoodItem,
    updateFoodItem,
    deleteFoodItem,

} from "../Controller/menuController.js";


// all menu routes
router.route("/")
.get(getFoodItems);

router.route("/owner")
.get(ownerPage)
.post(addFoodItem);

router.route("/owner/:id")
.put(updateFoodItem )
.delete( deleteFoodItem);

export default router;