import mongoose from "mongoose";
const Schema = mongoose.Schema;


const foodSchema = new Schema({

            name: {
                type: String,
                required: true
            },
            category: {
                type: String,
                enum: ["Starter","Main Course","Dessert"],
            },
            price: {
                type: Number,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            available: {
                type: Boolean,
            }
        
    
});


const Food = mongoose.model("Food" , foodSchema);

export default Food;