const updateCart = async (cart) => {
    await fetch("https://shopwave-xmkp.onrender.com/cart/update", {
        method:"PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(cart)
    });
    
};
export default updateCart;