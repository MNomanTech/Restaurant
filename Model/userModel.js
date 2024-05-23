import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    emailid: {
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }
});

const User = mongoose.model("User", userSchema);

export default User;