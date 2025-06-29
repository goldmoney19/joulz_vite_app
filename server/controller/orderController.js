import Order from "../model/Order.js";
import User from "../model/User.js";
import Product from "../model/Product.js";





export const _checkout =  async(req, res) => {
        // const { dataa:{fullname, address, state},user_id} = req.body;

        
    try{
            // console.log(req.body.user_id);
    //     console.log(req.body);
    //    console.log(fullname, address, state);
    //    console.log(user_id);
            // const _idd = req.body.user_id;
            // console.log(_idd);
         const { dataa:{fullname, address, state},user_id} = req.body;

         const client = await User.findById(user_id).populate("cart.productId");

         console.log(client)
         console.log(fullname,address,state)

           const items = client.cart.map(item => ({
              productId:item.productId._id,
              title:item.productId.title,
              quantity:item.quantity,
              price:item.productId.price
            

           }));

           console.log(items);


          const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
           
           console.log(totalPrice);

             if(!fullname || !address || !state ){
                 console.log("all inputs are required");
                 return res.status(400).json({message:"all inputs are required"});
                
           
               }

           const clientOrder = new Order({
                    userId:user_id,
                    fullname,
                    address,
                    state,
                    items,
                    totalPrice
                          });

                          await clientOrder.save();

                          client.cart = [];
                           client.save();
                        //    res.status(204).send();

      //   console.log({message:"order placed successfully", clientOrder});
        res.json({message:'order placed successfully', clientOrder});
        
     }
     catch(error){

      console.log(error)
     }


}