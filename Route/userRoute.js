// all packages import
import e from "express";
const router = e.Router({mergeParams: true});


// Controller Import
import {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout} from "../Controller/userController.js";



// all user routes
router.route('/')
.get(userProfile);

router.route('/:id')
.put(userUpdateProfile);

router.route('/signup')
.get(userSignup)
.post(userSignCompleted);

router.route('/login')
.get(userLogin)
.post(userLoginCompleted);

router.route('/logout')
.get(userLogout);


// error handling middle ware;

router.use((err,req,res,next)=>{

    console.log(err);
    res.render('alertMessage/error.ejs' ,{err});
});

export default router;


