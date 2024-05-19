// all packages imports
import express from 'express';
import mongoose from 'mongoose';
const app  = express();
import ejsMate from "ejs-mate";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// -------------------------
// all route imports
import menuRoute from "./Route/menuRoute.js";


// server and mongodb connection
const port = 8080;

app.listen(port, ()=>{
    console.log("Server is working at "+port);
});


main()
.then(() => {console.log("Database is started")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
};

// all packages middlewares
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.engine('ejs',ejsMate);
app.set("views",path.join(__dirname, "/views"));


// all router middle wares
app.use("/menu", menuRoute);