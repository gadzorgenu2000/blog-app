 const mongoose = require('mongoose')

 const blogSchema = new mongoose.Schema({
     title:{
         type: String,
         unique: true,
         required: true
     },
     body: {
         type: String,
         required: true
     }
 })

 const Blog = mongoose.model('blog', blogSchema)
 module.exports = Blog