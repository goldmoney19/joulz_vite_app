import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

     
      title:{

        type: String,
        required: true
      },
      description:{
                 type:String,
                 required:true
      },
       smallDescription:{
                 type:String,
                 required:true
      },
      
      price:{
                 type:String,
                 required:true
      },
      keyword:{
                 type:String,
                 required:true
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

export default mongoose.model("product", productSchema)