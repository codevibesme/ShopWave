const updateCart = async (cart) => {
    await fetch("http://localhost:8000/cart/update", {
        method:"PATCH",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(cart)
    });
    
};
export default updateCart;