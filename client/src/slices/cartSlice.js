import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [
        {
          name: "The Terrus in Sage",
          img: "assets/cart_boot_1.png",
          quantity: 1,
          price: 11800,
          
        },
        {
          name: "The Weekend Boot Farrah",
          img: "assets/cart_boot_2.png",
          quantity: 1,
          price: 16800,
          
        },
    ],
    subTotal: 28600,
    shipping: 0,
    total: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem : (state, action) => {
            const newItem = action.payload.newItem;
            const checkDup = state.cartItems.filter(item => item.name === newItem.name);
            if(checkDup){
                checkDup[0].quantity+=1;
                state.cartItems = [...state.cartItems.map(item => item.name === newItem.name ? checkDup[0] : item)];
            }
            else
                state.cartItems = [...state.cartItems, action.payload.newItem];
            state.subTotal += newItem.price;
        },
        removeItem: (state, action) => {
            const delItem = action.payload.item;
            state.subTotal -= delItem.price;
            const fetchItem = state.cartItems.filter( item => item.name === delItem.name);
            if(fetchItem && fetchItem[0].quantity>1){
                fetchItem[0].quantity -= 1;
                state.cartItems =[...state.cartItems.map(item => item.name === fetchItem[0].name ? fetchItem[0] : item)];
            } else {
                state.cartItems = [...state.cartItems.filter(item => item.name !== delItem.name)];
            }
        },
        deleteItem: (state, action) => {
            state.subTotal = state.subTotal - action.payload.item.quantity*action.payload.item.price;
            state.cartItems = [...state.cartItems.filter(item => item.name !== action.payload.item.name)];
        },
        setSubTotal: (state, action) => {
            state.subTotal = action.payload.subTotal;
        }
    }
});
export const { addItem, removeItem, setSubTotal, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;

