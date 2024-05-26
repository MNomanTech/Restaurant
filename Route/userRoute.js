// all packages import
import e from "express";
import passport from "passport";
const router = e.Router({mergeParams: true});
import isLoggedIn from "../Middlewares/isLogin.js";

// Controller Import
import {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout} from "../Controller/userController.js";





// all user routes
router.route('/')
.get(isLoggedIn,userProfile);

router.route('/:id')
.put(isLoggedIn,userUpdateProfile);

router.route('/signup')
.get(userSignup)
.post(userSignCompleted);

router.route('/login')
.get(userLogin)
.post(passport.authenticate('local',{failureRedirect:'/user/login', failureFlash: true}), userLoginCompleted);

router.route('/logout')
.get(userLogout);


// error handling middle ware;

router.use((err,req,res,next)=>{

    res.redirect(req.originalUrl);
});

export default router;


