
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

        req.flash("success", "Profile updated successfully. Please log in to continue.");
        res.redirect('/user/login');
        
    } catch (error) {
        next("Please enter the correct data");
    }
    
}

let userSignup = async (req,res)=>{
    res.render("user/signup.ejs");
}

let userSignCompleted = async (req,res,next)=>{
    try {
        let {username,password,emailid,phone,address} = req.body;

        let newUser =  new User({username,emailid,phone,address});

        let registeredUser = await User.register(newUser,password);

        req.login(registeredUser, (err)=>{
            if(err){
                req.flash('error', "Automatic Login failed!");
                next(err);
            }
            
            req.flash("success", "Welcome! You've successfully signed up!");
            res.redirect('/home');
        })
        
        

    } catch (error) {
        req.flash("error","Signup failed: Please check your details and try again.");
        next(error);
    }
    
}

let userLogin = async (req,res)=>{
    res.render("user/login.ejs");
}

let userLoginCompleted = async (req,res,next)=>{
    
        req.flash("success","Login successful. Welcome back!");
        
        res.redirect('/home');
    
}

let userLogout = async (req,res,next)=>{
    req.logOut((err) => {
        if(err){
            req.flash('error', "Logout failed. Please try again later.");
            res.redirect('/home');
        }

        req.flash('success', "You have successfully logged out.");
        res.redirect('/home');
    })
}


export {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout};