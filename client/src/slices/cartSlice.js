import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    total: 0,
    subTotal: 0,
    shipping: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        setCart: (state, action) => {
            state.cartItems = Object.entries(action.payload.products).map(value => value[1]);
        },
        addItem : (state, action) => {
            const newItem = action.payload.newItem;
            const checkDup = state.cartItems.filter(item => item.name === newItem.name);
            if(checkDup.length!==0 && checkDup[0].quantity){
                checkDup[0].quantity+=1;
                state.cartItems = [...state.cartItems.map(item => item.name === newItem.name ? checkDup[0] : item)];
            }
            else{
                newItem.quantity=1;
                state.cartItems = [...state.cartItems, newItem];
            }
            state.subTotal += newItem.price;
            state.total = state.subTotal;
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
            state.total = state.subTotal;
        },
        deleteItem: (state, action) => {
            state.subTotal = state.subTotal - action.payload.item.quantity*action.payload.item.price;
            state.cartItems = [...state.cartItems.filter(item => item.name !== action.payload.item.name)];
            state.total = state.subTotal;
        },
        setSubTotal: (state, action) => {
            state.subTotal = action.payload.subTotal;
            state.total = state.subTotal;
        },
        setTotal: (state) => {
            state.total = state.subTotal+state.shipping;
        },
        setShipping: (state, action) => {
            state.shipping = action.payload.shipping;
            state.total = state.subTotal + action.payload.shipping;
        },
        resetCart: (state) => {
            state.cartItems=[];
            state.shipping=0;
            state.subTotal=0;
            state.total=0;
        }
    }
});
export const { addItem, removeItem, deleteItem, setTotal, setShipping, setCart, setSubTotal, resetCart } = cartSlice.actions;
export default cartSlice.reducer;

/*
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
    total: 28600,
*/