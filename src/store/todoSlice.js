import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name:"todos",
    initialState:{
        allTodos : []
    },

    reducers:{
        addTodo: (state, action)=>{
            state.allTodos = [...state.allTodos,action.payload.todoTobeAdded]
            
           
            
        },
        removeTodo:(state,action) =>{
            
            state.allTodos = action.payload.newTodoArray
            
        },
        editTodo:(state,action)=>{

            state.allTodos = action.payload.newTodoArray
        }
    }
});

export const {
    addTodo,
    removeTodo,
    editTodo
} = todoSlice.actions;

export default todoSlice.reducer;