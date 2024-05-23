

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
    console.log(newUser);
}

let userLogin = async (req,res)=>{
    
}

let userLoginCompleted = async (req,res)=>{
    
}

let userLogout = async (req,res)=>{
    
}


export {userProfile,userUpdateProfile,userSignup,userSignCompleted,userLogin,userLoginCompleted,userLogout};