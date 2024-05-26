import mongoose from "mongoose";
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;



const userSchema = new Schema({
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

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);

export default User;