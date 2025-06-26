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
   multipleImages:{

               type: [String],
                default: [],
   }
    
})

export default mongoose.model("Portfolios", portfolioSchema)