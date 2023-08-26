import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id:String,
    name: String,
    thumbnail: String,
    size: Number,
    quantity:{
        type: Number,
        default: 1,
    },
    price: Number,
}, {_id:false});
const cartSchema = new mongoose.Schema({
    user_id: String,
    products: {
        type: Map,
        of: productSchema,
    },
    subTotal:{
        type: Number,
        default: 0,
    },
    Total:{
        type: Number,
        default: 0,
    },
    shipping:{
        type: Number,
        default: 0,
    }
});
const Cart = mongoose.model("Cart", cartSchema);
export default Cart;