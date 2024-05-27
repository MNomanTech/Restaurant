// all packages imports
import express from 'express';
import mongoose from 'mongoose';
const app  = express();
import ejsMate from "ejs-mate";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
import methodOverride from 'method-override';
import session from 'express-session';
import flash from 'connect-flash';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import LocalStrategy from 'passport-local';
import dotEnv from 'dotenv';
// import MongoStore from 'connect-mongo';

if(process.env.NODE_ENV != "production") dotEnv.config();


// -------------------------
// all route imports
import menuRoute from "./Route/menuRoute.js";
import homeRoute from "./Route/homeRoute.js";
import orderRoute from "./Route/orderRoute.js";
import userRoute from "./Route/userRoute.js";
import bookRoute from "./Route/bookRoute.js";

// all model imports
import User from './Model/userModel.js';
import isLoggedIn from './Middlewares/isLogin.js';

// server and mongodb connection
const port = 8080;

app.listen(port, ()=>{
    console.log("Server is working at "+port);
});


main()
.then(() => {console.log("Database is started")})
.catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
  await mongoose.connect(process.env.ATLAS_DB);

  // let ownerUser = new User({username: "ownerRestaurant",emailid: 'owner123@gmail.com',phone: 1234567899,address: 'bandlaguda'});
  // let ownerResult = await User.register(ownerUser,'12345');
  // console.log(ownerResult);
};

// all packages middlewares
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.engine('ejs',ejsMate);
app.set("views",path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,'/public')));
app.use(methodOverride('_method'));
app.use(cookieParser("secret"));
app.use(flash());

app.use(session({
  
  secret: "mysecretcode", 
  resave: false , 
  saveUninitialized: true,
  cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
  },
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


// res locals
app.use((req,res,next)=>{
  res.locals.success = req.flash('success');
  res.locals.error = req.flash('error');
  res.locals.currentUser = req.user;
  next();
});


// ----------------------------
// all router middle wares
app.use("/home", homeRoute);
app.use("/", homeRoute);
app.use("/menu", menuRoute);
app.use("/order", isLoggedIn, orderRoute);
app.use("/user", userRoute);
app.use("/book", isLoggedIn,bookRoute);
