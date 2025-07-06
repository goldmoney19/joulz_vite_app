import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema({

       title:{
                 type: String,
                 required: true

       },

       description:{
                  
                 type: String,
                 required: true

       },

       design:{
                   type: String,
                 required: true
   },

  image:{
                   type: String,
                 required: true
   },
     multipleImages:[{ // <-- This makes it an array
        url: {
          type: String,
          required: true // Each image in the array must have a URL
        }
    
})

export default mongoose.model("Portfolios", portfolioSchema)
