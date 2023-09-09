import React,{useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector} from 'react-redux'
import { addBlog } from '../services/blogSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = () => {
    const params = useParams()
    const selectBlogs = useSelector(state => state.blogs.blogs)

    const selectBlog = selectBlogs.filter(blog => blog._id === params.id)
    const {_id, title, body} =  selectBlog[0]

    const [utitle, setTitle] = useState(title)
    const [ubody, setBody] = useState(body)
    const [error, setError] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    //toastify
    
    const submitHandler = async (e) => {
        e.preventDefault()
        
        if(!utitle || !ubody){
            setError('Please fill all the input Fields.')
        }
        else{
            const blog = {title: utitle, body: ubody}
            axios.patch(`https://blog-api-puh7.onrender.com/${params.id}`, blog)
            .then((response)=> {
            // dispatch(addBlog(response.data))
            setTitle('')
            setBody('')
            setError('')
            setTimeout(() => {
                navigate('/')
            }, 2000);
            toast("Updated Successfully!");
            
        })
            
        }
    }
  return (
    <div className=' mx-auto mt-6 p-4 border rounded-md max-w-[600px]'>
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="title">Title</label>
                <input value={utitle} onChange={(e)=> {setTitle(e.target.value)}} className='w-full p-2 border' type="text" name="" id="title" />
            </div>
            <div>
                <label htmlFor="body">Body</label>
                <input value={ubody} onChange={(e)=> {setBody(e.target.value)}} className='w-full p-2 border' type="text" name="" id="body" />
            </div>
            <input type="submit" value="Add" className='mt-4 w-full bg-blue-600 p-3 border-none' />
            {error ? <span className='border inline-block bg-red-100 border-red-700 text-red-700 p-1 w-full mt-2'>{error}</span> : ""}
        </form>  
        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    </div>
  )
}

export default UpdateForm
