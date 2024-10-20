const mongoose = require('mongoose')

let blogSchema = mongoose.Schema({
     title:{
            type : String,
            trim : true,
            required : true
     },
     
     author:{
            type : String,
            trim : true,
            required : true
     },
      comment:{
            type : String,
            trim : true,
            required : true
     }

})


let Blog = mongoose.model('Blog',blogSchema)

module.exports = Blog;
