import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";


const reduxStore = configureStore({
    reducer:{
        todos: todoReducer
    },
});

export default reduxStore;

export const dispatch = (func) =>{
    reduxStore.dispatch(func);
}