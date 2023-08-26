import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name: "",
    address:"" ,
    state:"",
    country:"",
    city:"",
    phone:"",
    email:"",
    pincode:"",
}
export const shippingSlice = createSlice({
    name:"shipping",
    initialState,
    reducers:{
        setName: (state, action) => {
            state.name = action.payload.name;
        },
        setAddress: (state, action) => {
            state.address = action.payload.address;
        },
        setState: (state, action) => {
            state.state = action.payload.state;
        },
        setCity: (state, action) => {
            state.city = action.payload.city;
        },
        setCountry: (state, action) => {
            state.country = action.payload.country;
        },
        setPhone: (state, action) => {
            state.phone = action.payload.phone;
        },
        setEmail: (state, action) => {
            state.email = action.payload.email;
        },
        setPincode: (state, action) => {
            state.pincode = action.payload.pincode;
        },
        resetShipping: (state) => {
            state.name="";
            state.address="" ;
            state.state="";
            state.country="";
            state.city="";
            state.phone="";
            state.email="";
            state.pincode="";
        }
    }
});
export const {setName, setAddress, setState, setCity, setCountry, setPhone, setPincode, setEmail, resetShipping} = shippingSlice.actions;
export default shippingSlice.reducer;