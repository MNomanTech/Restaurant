// all models imports
import Food from "../Model/foodModel.js";

let getFoodItems = async (req,res) => {
    let mainCourse = await Food.find({category: 'Main Course'});
    let starters = await Food.find({category: "Starter"});
    let desserts = await Food.find({category: "Dessert"});
    res.render("Menu/menu.ejs", {mainCourse,starters,desserts});
};

// page only for owner to add food item or delete or update

let ownerPage = async (req,res) =>{
    res.render('Owner/owner.ejs');
}

let addFoodItem = async (req, res,next) => {

    try {
        let newFoodItem = req.body;

        await new Food(newFoodItem).save();
        
        req.flash('success', 'Food successfully added to the menu!');
        res.redirect('/menu/owner');

    } catch (error) {
        req.flash('error', 'Failed to add food item to menu. Please try again later.');
        next(error);
    }
};

// let updateFoodItem = async (req, res)=> {
//     const {id : foodId} = req.params;

//     let updateFoodItem = req.body;
    
//     let result =  await Food.findByIdAndUpdate(foodId , updateFoodItem , {new: true , runValidators: true});
//     console.log(result);
// };

// let deleteFoodItem = async (req,res) => {
//     const {id: foodId} = req.params;

//     let result = await Food.findByIdAndDelete(foodId);
//     console.log(result);
// };

export  {
    getFoodItems,
    ownerPage,
    addFoodItem,
    // updateFoodItem,
    // deleteFoodItem,
};