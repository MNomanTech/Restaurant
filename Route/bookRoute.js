// all packages import
import e from "express";
const router = e.Router({mergeParams:true});

// model import
import Book from "../Model/bookModel.js";

// login middleware 
import isLoggedIn from "../Middlewares/isLogin.js";
import User from "../Model/userModel.js";

// all routes
router.route('/')
.get( async (req,res) => {
    if(req.user)
    {let bookedData = await Book.find({customerDetails: req.user["_id"]});
    
    res.render('Book/book.ejs',{bookedData});}
})
.post(async(req,res,next)=>{
    try {
        if(req.user )
        {let bookData = req.body;
        let userId = req.user["_id"];

        let saved = await new Book({...bookData, customerDetails: userId}).save();

        await User.findByIdAndUpdate(userId, {$push: {book: saved["_id"]}});
    
        req.flash('success', 'Table booked successfully! Looking forward to your visit.');
        res.redirect('/book');}
    } catch (error) {
        req.flash('error', 'Failed to book a table. Please try again later.')
        next(error);
    }
});


router.use((err,req,res,next)=>{

    
    res.render(req.originalUrl);
});


export default router;


