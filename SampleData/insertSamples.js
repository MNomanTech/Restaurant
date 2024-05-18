import mongoose from 'mongoose';
import Food from '../Model/foodModel.js';
import mainCourseSample from './mainCourseSample.js';
import startersSample from './startersSample.js';
import dessertsSample from './dessertsSample.js';
main()
.then(() => {
    console.log("Database is started");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

};


let addItems = async function(){
    await Food.deleteMany({});
    await Food.insertMany(mainCourseSample);
    await Food.insertMany(startersSample);
    await Food.insertMany(dessertsSample);
};

addItems()
.then(() => {
    console.log("All Samples are inserted successfull!");
})
.catch((err)=>{
    console.log(err);
});

