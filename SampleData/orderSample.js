import mongoose from 'mongoose';
import Order from '../Model/orderFood.js';
import Food from '../Model/foodModel.js';

main()
.then(() => {
    console.log("Database is started");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/restaurant');

};


let addOrders = async function(){
    let result = await new Order({
        orderItem: await Food.findOne({name: 'Pootha Rekulu'}),
        totalAmount: 100,
    }).save();
    console.log(result);
};


addOrders();