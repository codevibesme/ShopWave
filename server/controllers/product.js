import Product from "../models/Product.js";

export const getAllProducts = async (req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json({products});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
};
export const addProduct = async (req, res) => {
    try{
        const {
            name,
            thumbnail,
            hoverThumbnail,
            images,
            sizes,
            price,
            category,
            quantity,
            inStock,
        } = await req.body;
    
        const addedProduct = new Product({
            name,
            thumbnail,
            hoverThumbnail,
            images,
            sizes,
            price,
            category,
            quantity,
            inStock,
        });
        const product = await addedProduct.save();
        res.status(201).json({product});
    } catch(err){
        res.status(400).json({message: "There's an error while adding new product!"});
    }
};
export const getProductByCategory = async (req, res) => {
    try{
        const {category} = await req.params;
        const allProducts = await Product.find({});
        const products = allProducts.filter(item => item.category.has(category))
        res.status(200).json({products});
    } catch(err){
        res.status(400).json({message: err.message});
    }
}