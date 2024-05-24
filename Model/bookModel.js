import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    book:{
        type: String,
        required: true,
    },
    members:{
        type: Number,
        required: true,
    },
    date:{
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;