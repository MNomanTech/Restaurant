import mongoose from "mongoose";
const Schema = mongoose.Schema;


const orderCartSchema = new Schema({
    customerDetails: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Food",
    }
});


const OrderCart = mongoose.model("OrderCart", orderCartSchema);


export default OrderCart;