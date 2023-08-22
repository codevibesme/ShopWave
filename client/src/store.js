import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import authReducer from "./slices/authSlice";
import cartReducer from "./slices/cartSlice";
import shippingReducer from "./slices/shippingSlice";
import productReducer from "./slices/productSlice";
import storage from "redux-persist/lib/storage";
import persistCombineReducers from "redux-persist/es/persistCombineReducers";

const persistConfig = {key: "root", storage, version: 1};
const persistedReducer = persistCombineReducers(persistConfig, {auth: authReducer, cart: cartReducer, shipping: shippingReducer, product: productReducer});
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});