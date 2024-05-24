import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
        unique: true
    },
    phone:{
        type: Number,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true,
    },
    order:[{
        type: Schema.Types.ObjectId,
        ref: "Order",
    }],
    orderCart:[{
        type: Schema.Types.ObjectId,
        ref: "OrderCart",
    }],
    book:[{
        type: Schema.Types.ObjectId,
        ref: "Book",
    }]
});

const User = mongoose.model("User", userSchema);

export default User;