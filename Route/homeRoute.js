import e from "express";
const router = e.Router({mergeParams: true});




router.route("/home")
.get((req,res) => {
    
    res.render("Home/home.ejs");
});



export default router;