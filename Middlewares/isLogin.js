
let isLoggedIn = (req,res,next)=>{
    
    if(!req.isAuthenticated()){
        req.flash('error', 'Access denied. Please log in to continue.');
        res.redirect('/user/login');
    }

    next();
}


export default isLoggedIn;