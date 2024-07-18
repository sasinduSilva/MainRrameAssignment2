import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import authReducer from "./authSlice";


const reduxStore = configureStore({
    reducer:{
        todos: todoReducer,
        auth: authReducer
    },
    
});

export default reduxStore;

export const dispatch = (func) =>{
    reduxStore.dispatch(func);
}