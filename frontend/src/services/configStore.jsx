import {configureStore} from '@reduxjs/toolkit'
import blogReducer from '../services/blogSlice'
export const store = configureStore({
    reducer: {
        blogs: blogReducer
    }
})