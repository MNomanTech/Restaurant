
// all models import
import User from "../Model/userModel.js";


let userProfile = async (req,res)=>{
    res.render("user/user-profile.ejs");
}

let userUpdateProfile = async (req,res)=>{
    let {id: userId}  = req.params;
    let userUpdatedData = req.body;
    console.log(userId);

    console.log(userUpdatedData);
}

let userSignup = async (req,res)=>{
    res.render("user/signup.ejs");
}

let userSignCompleted = async (req,res)=>{
    let newUser = req.body;

    await new User(newUser).save();
    
    res.redirect('/home');
}

let userLogin = async (req,res)=>{
    res.render("user/login.ejs");
}

let userLoginCompleted = async (req,res)=>{
    let userData = req.body;

    let result = await User.findOne(userData);

    res.redirect('/home');
}

let userLogout = async (req,res)=>{
    
}


export {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout};