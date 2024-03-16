import { configureStore } from '@reduxjs/toolkit';
import contentReducer from './createSlice'; // Update import
const store = configureStore({
    reducer: {
        content: contentReducer
    }
});
export default store;