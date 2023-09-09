import React,{useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios';
import {Link } from 'react-router-dom'
import AddForm from './AddForm';
import { setAllBlogs } from '../services/blogSlice';
import BlogCard from './BlogCard';
const Home = () => {
  
    const selectBlogs = useSelector(state => state.blogs.blogs)
    const dispatch = useDispatch()

    useEffect(() => {
      axios.get('https://blog-api-ivory-iota.vercel.app/api/blog')
        .then(response => {
          dispatch(setAllBlogs(response.data))
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, [dispatch]);
  
    // Sort selectBlogs in descending order based on the createdAt date
  const sortedBlogs = selectBlogs.slice().sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return dateB - dateA;
  });
  return (
    <div className='grid grid-cols-2 gap-5'>
      <div>
      <h3>All Blog</h3>
        <div className='mt-3'>
          {selectBlogs == 0 ? <p>No Data available to show please add a new blog</p>
          : sortedBlogs && sortedBlogs.map(blog => {
            return(
               <BlogCard
                key={blog._id}
                id={blog._id}
                title={blog.title}
                body={blog.body}
                date={blog.createdAt}
               />
            )
        })}
         
        </div>
      </div>
     <div>
    <AddForm/>
    </div>
    </div>
  )
}

export default Home
