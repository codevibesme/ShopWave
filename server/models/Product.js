import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    thumbnail: String,
    hoverThumbnail: String,
    images: [String],
    sizes: [Number],
    price: Number,
    category: {
        type: Map,
        of: String  
    },
    quantity: Number,
    inStock: Boolean,
});
const Product = mongoose.model("product", productSchema);
export default Product;