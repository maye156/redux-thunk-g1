import {configureStore} from "@reduxjs/toolkit";

//Importamos los reducers
import userReducer  from "../reducers/users/userSlice";
import  cartReducer  from "../reducers/cart/cartSlice";


export default configureStore ({
    reducer: {
        user: userReducer,
        cart: cartReducer
    }
});