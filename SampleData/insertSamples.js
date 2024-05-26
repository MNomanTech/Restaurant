import mongoose from 'mongoose';
import Food from '../Model/foodModel.js';
import mainCourseSample from './mainCourseSample.js';
import startersSample from './startersSample.js';
import dessertsSample from './dessertsSample.js';


let atlas = "mongodb+srv://mohammednoman757:i4ZlhKx02jaO2cNe@restaurantcluster.6iugv4z.mongodb.net/?retryWrites=true&w=majority&appName=RestaurantCluster";
main()
.then(() => {
    console.log("Database is started");
    addItems()
    .then(() => {
    console.log("All Samples are inserted successfull!");
    })
    .catch((err)=>{
    console.log(err);
    });
})
.catch(err => console.log(err));

async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');
    await mongoose.connect(atlas);

};


let addItems = async function(){

    await Food.deleteMany({});
    await Food.insertMany(mainCourseSample);
    await Food.insertMany(startersSample);
    await Food.insertMany(dessertsSample);
};



