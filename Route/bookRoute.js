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
.post(async(req,res,next)=>{
    try {
        let bookData = req.body;
    
        await new Book(bookData).save();
    
        res.redirect('/home');
    } catch (error) {
        next(error["_message"]);
    }
});


router.use((err,req,res,next)=>{

    console.log(err);
    res.render('alertMessage/error.ejs' ,{err});
});


export default router;


