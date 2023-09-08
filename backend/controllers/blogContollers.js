import mongoose from "mongoose";
import { User, Blog } from '../models/blogModel.js'

const createBlog = async (req, res) => {
    const {title, body} = req.body

    try {
        const blogs = await Blog.create({title,body})
        res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error.message, wala: 'wla ka ininput e'})
    }
    // res.status(200).json(req.body)
    
}
const getAllBlogs = async (req, res) => {
    const blogs = await Blog.find({}).sort({createdAt: -1})
    res.status(200).json(blogs)
}

const getBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'not avaialble'})
    }
  
    const blog =  await Blog.findById(id)
    if(!blog){
      return res.status(404).json({error: 'this is not available'})
    }
    res.status(200).json(blog)
}
const deleteBlog = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'not avaialble'})
    }
  
    const blog =  await Blog.findOneAndDelete({_id: id})
    
    if(!blog){
      return res.status(404).json({error: 'this is not available'})
    }
    res.status(200).json(blog)
}

const updateBlog = async (req, res) => {
    const {id} = req.params
    // res.status(200).json({mssg: 'success updatee'})
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'not updated'})
    }
  
    const blog =  await Blog.findOneAndUpdate({_id: id},{
        ...req.body
    })
    
    if(!blog){
      return res.status(404).json({error: 'this is not available'})
    }
    res.status(200).json(blog)
}

export {createBlog, getAllBlogs, getBlog, deleteBlog,updateBlog}