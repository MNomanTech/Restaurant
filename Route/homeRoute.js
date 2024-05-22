import e from "express";
const router = e.Router({mergeParams: true});




router.route("/")
.get((req,res) => {
    res.render("Home/home.ejs");
});



export default router;