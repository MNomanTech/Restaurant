import express from 'express';
import mongoose from 'mongoose';
const app  = express();


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