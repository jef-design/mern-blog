import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/blogContollers.js'
const router = express.Router()

router.post('/create', createBlog)

router.get('/', getAllBlogs)

router.get('/:id', getBlog)

router.delete('/:id', deleteBlog)

router.patch('/:id', updateBlog)



export default router