import { createSlice } from "@reduxjs/toolkit";

const estadoInicial = {
    email:"",
    fullName:"",
    token:"",
}
export const userSlice = createSlice ({
    name: "user", 
    initialState: estadoInicial,
    reducers:{
        setUser:(state,action) => {
            state.email= action.payload.email;
            state.fullName= action.payload.fullName;
            state.token= action.payload.token;
        }, 
        unSetUser:(state,action) => {
            state.email= "" ;
            state.fullName="" ;
            state.token= "";
        }
    },

});

export const {setUser,unSetUser}= userSlice.actions; 
export default userSlice.reducer; 