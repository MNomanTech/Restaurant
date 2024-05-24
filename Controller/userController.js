
// all models import
import User from "../Model/userModel.js";


let userProfile = async (req,res)=>{
    res.render("user/user-profile.ejs");
}

let userUpdateProfile = async (req,res,next)=>{
    try {
        let {id: userId}  = req.params;
        let userUpdatedData = req.body;

        if(userUpdatedData == {}) throw new Error();

        let result = await User.findByIdAndUpdate(userId, userUpdatedData ,{runValidators: true});
        console.log(result);

        res.redirect('/user');
        
    } catch (error) {
        next("Please enter the correct data");
    }
    
}

let userSignup = async (req,res)=>{
    res.render("user/signup.ejs");
}

let userSignCompleted = async (req,res,next)=>{
    try {
        let newUser = req.body;

        await new User(newUser).save();
        
        res.redirect('/home');

    } catch (error) {
        next(error["_message"]);
    }
    
}

let userLogin = async (req,res)=>{
    res.render("user/login.ejs");
}

let userLoginCompleted = async (req,res,next)=>{
    try {
        let userData = req.body;

        let check = await User.findOne(userData);
        
        if(!check) throw new Error("User is not found");

        res.redirect('/home');
    } catch (error) {
        next(error);
    }
}

let userLogout = async (req,res)=>{
    
}


export {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout};