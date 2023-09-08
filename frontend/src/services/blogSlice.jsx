import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    blogs: []
}

export const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        setAllBlogs: (state, action) => {
            
            state.blogs = action.payload
        },
        addBlog: (state, action) => {
            console.log(action.payload)
            state.blogs = [...state.blogs, action.payload]
        },
        deleteBlog: (state, action) => {
      
            state.blogs = state.blogs.filter((blog) => blog._id !== action.payload)
        }
    }

})
export const {setAllBlogs,addBlog,deleteBlog} = blogSlice.actions
export default blogSlice.reducer