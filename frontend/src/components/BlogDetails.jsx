import React,{useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const BlogDetails = () => {
    const params = useParams()

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
      axios.get(`https://blog-api-drab-delta.vercel.app/${params.id}`)
        .then(response => {
          console.log(response.data);
          setBlogs(response.data)
          // Use the data here
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }, []);

    const formattedDate = (date) => {
      const options = { year: 'numeric', month: 'short', day: '2-digit' };
      return new Date(date).toLocaleDateString('en-US', options);

    }
  
  return (
    <div>
        {[blogs] && [blogs].map((blog, i) => {
          return(
            <div key={i}>
              <p>{blog.title}</p>
              <span>{formattedDate(blog.createdAt)}</span>
              <div>
                <span>{blog.body}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default BlogDetails
