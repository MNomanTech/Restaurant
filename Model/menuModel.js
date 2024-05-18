import mongoose, { SchemaTypes } from "mongoose";
const Schema = mongoose.Schema;


const menuSchema = new Schema({
    starters: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Food"
        }
    ],
    main_course: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Food"
        }
    ],
    desserts: [
        {
            type: SchemaTypes.ObjectId,
            ref: "Food"
        }
    ],

});


const Menu = mongoose.model("Menu", menuSchema);

export default Menu;