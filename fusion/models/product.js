// define a schema
import {model, models} from "mongoose";
import {Schema} from "mongoose";

const ProductSchema = new Schema ({
    name: String,
    picture: String,
    price: Number
    
});

const product = models?.product || model('product',ProductSchema); 

export default  product;