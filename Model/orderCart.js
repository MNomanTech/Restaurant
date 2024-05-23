import mongoose from "mongoose";
const Schema = mongoose.Schema;


const orderCartSchema = new Schema({
    cart: {
        type: Schema.Types.ObjectId,
        ref: "Food",
    }
});


const OrderCart = mongoose.model("OrderCart", orderCartSchema);


export default OrderCart;