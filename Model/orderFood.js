import mongoose, { SchemaType } from "mongoose";
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    customerDetails: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderItem : {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Food",
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ["Completed", "Cancelled"],
        default: "Completed",
    },
    payment: {
        method: {
            type: String,
            enum: ["Cash","Card","UPI"],
            default: "Cash",
        },
        status: {
            type: String,
            enum: ["Paid","unpaid"],
            default: "Paid",
        },
    },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;