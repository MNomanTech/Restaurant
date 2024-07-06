// all packages imports
import e from "express";
const router = e.Router({mergeParams: true});


// Controllers import
import {
    getFoodItems,
    ownerPage,
    addFoodItem,
    getUpdatePage,
    updateFoodItem,

} from "../Controller/menuController.js";


// all menu routes
router.route("/")
.get(getFoodItems);

router.route("/owner")
.get(ownerPage)
.post(addFoodItem);

router.route('/update')
.get(getUpdatePage)
.post(updateFoodItem);



router.use((err,req,res,next)=>{
    
    res.render(req.originalUrl);
});

export default router;