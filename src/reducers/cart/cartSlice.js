import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
    totalCount: 0,
    productList: [],

}
export const cartSlice = createSlice({
    name: "cart",
    initialState: estadoInicial,
    reducers: {
        addProduct: (state, action) => {
            state.totalCount +=1;
            state.productList = [...state.productList, action.payload];
        },
        removeProduct:(state, action)=>{
            const productId = action.addProduct;
            state.totalCount -=1;
            state.productList= state.productList.filter(product => product.id!== productId)
        }
    },

});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer; 