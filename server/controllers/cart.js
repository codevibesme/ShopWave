import Cart from "../models/Cart.js";
export const fetchCart = async (req, res) => {
    try{
        const {user_id} = await req.body;
        const cart = await Cart.find({user_id}).exec();
        res.status(200).json({cart});
    } catch(err){
        res.status(400).json({message: err.message});
    }
}
export const addItem = async (req, res) => {
    try{
        const { user_id, product } = await req.body;
        let cart = await  Cart.findOne({user_id}).exec();
        // IF cart already contains items
        if(cart){
            let {products} = cart;
            // contains the existing product already.
            if(products.has(product.id)){
                let details = products.get(product.id);
                details.quantity+=1;
                products.set(product.id, details);
            } else{
                // does not contain this item.
                products.set(product.id, product);
            }
            cart.subTotal += product.price;
            cart.Total += product.price;
            cart.products=products;
            const updateCart = await Cart.findOneAndUpdate({user_id}, cart, {returnOriginal: false});
            cart = updateCart;
        }
        else {
            // If an user adds products to cart for the first time, i.e cart is empty.
            const products = new Map();
            products.set(product.id, product);
            const newCart = new Cart({
                user_id,
                products,
                subTotal: product.price,
                Total: product.price,
            });
            cart = await newCart.save();
        }
        res.status(201).json({cart});
    } catch(err){
        res.status(400).json({message: err.message});
    }
}