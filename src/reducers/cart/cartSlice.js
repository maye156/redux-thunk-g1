import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
    totalCount:0,
    productList:[],
   
}
export const cartSlice = createSlice ({
    name: "cart", 
    initialState: estadoInicial,
    reducers:{
        
    },

});

export const {addProduct,removeProduct}= cartSlice.actions; 
export default cartSlice.reducer; 