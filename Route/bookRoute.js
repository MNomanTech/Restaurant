// all packages import
import e from "express";
const router = e.Router({mergeParams:true});

// model import
import Book from "../Model/bookModel.js";

// all routes
router.route('/')
.get( async (req,res) => {

    let bookedData = await Book.find();
    
    res.render('Book/book.ejs',{bookedData});
})
.post(async(req,res)=>{
    let bookData = req.body;
    
    let result = await new Book(bookData).save();
    
    res.redirect('/home');
})


export default router;


