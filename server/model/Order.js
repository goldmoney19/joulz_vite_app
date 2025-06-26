import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

       userId:{type:String},
       fullname:{type: String, required: true},
      address:{ type: String, required: true},
        state:{type: String, required: true},

    items:[{
               productId:{type:mongoose.Schema.Types.ObjectId, ref:"product"},
               title:{type: String,required:true},
                quantity:{type: Number,required:true},
                price:{type: Number, required:true},
                 }],
       totalPrice:{type: Number, required:true},
       paymentStatus:{
              type:String,
              enum:['pending', 'paid', 'failed'],
              default:'pending',
       },
       paymentReference:{type:String},
       createdAt:{type:Date, default:Date.now}
 
});

export default mongoose.model("Order", orderSchema)