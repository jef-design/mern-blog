import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { deleteBlog } from '../services/blogSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BlogCard = ({id, title, body, date}) => {

  const dispatch = useDispatch()

  const formattedDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    return new Date(date).toLocaleDateString('en-US', options);

  }
    const deleteHandler = () => {
        axios.delete(`https://blog-api-nine-mocha.vercel.app/api/blog/${id}`)
        .then((res)=> {
          dispatch(deleteBlog(id))
          // toast(`${title} has been deleted`)
        })
      }
  return (
                
    <div className='border p-3 mb-2 flex gap-3 justify-between items-center'>
      <Link to={`api/blog/${id}`}>
      <div className=' hover:underline'>
      <p className=' text-lg font-bold'>{title}</p>
       <p>{body}</p>
       <span className=' text-sm text-gray-600'>{formattedDate(date)}</span>
      </div>
      </Link>
      <Link to={`api/blog/update/${id}`} className=' bg-red-600 text-white p-2 rounded-sm cursor-pointer'>Update</Link>
       <div className=' bg-red-600 text-white p-2 rounded-sm cursor-pointer' onClick={deleteHandler}>Delete</div>
       {/* <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          /> */}
      </div>
   
  )
}

export default BlogCard
