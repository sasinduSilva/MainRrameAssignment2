import { configureStore } from "@reduxjs/toolkit"; // Import configureStore from Redux Toolkit
import todoReducer from "./todoSlice"; // Import the todo reducer
import authReducer from "./authSlice"; // Import the auth reducer

// Create and configure the Redux store
const reduxStore = configureStore({
    reducer: {
        todos: todoReducer, // Attach the todo reducer under the 'todos' key
        auth: authReducer // Attach the auth reducer under the 'auth' key
    },
});

export default reduxStore; // Export the configured store as the default export

// Export a helper function to dispatch actions to the store
export const dispatch = (func) => {
    reduxStore.dispatch(func); // Dispatch the provided action to the store
};
