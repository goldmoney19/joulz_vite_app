import axios from 'axios';
import Order from '../model/Order.js';



export const initializePayment = async(req, res) => {
    const datee = Date.now();

         const {email, amount, orderId} = req.body


     try{
             console.log(email,amount,orderId)
             console.log('guy');
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount:amount * 100,
            reference:`order_${orderId}_${datee}`,
            callback_url:process.env.CALLBACK_URL,
            metadata:{orderId}

        },
       {
        
        headers : {

            Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
            'Content-type':'application/json'
                    }
        }
    )
console.log(response.data.data.authorization_url);
    res.status(200).json({

        message:'tansaction initialized',
        authorization_url:response.data.data.authorization_url,
        reference: response.data.data.reference,

    });

     }catch(error){

       console.log('paystack error:',error.message);
       res.status(500).json({
        message:'failed to initialize transaction'
       })

     }

}






export const verifyPayment = async(req,res)=> {
   
    const {reference} = req.query;
    console.log(reference);

    try{
          const response = await axios.get(
              `https://api.paystack.co/transaction/verify/${reference}`,
              {

               headers: {
                   Authorization:`Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                   'Content-Type': 'application/json',

                },
              },

          );

          const {status, amount, metadata} = response.data.data;
          console.log(metadata);
          if(status === 'success'){

            const order  = await Order.findById(metadata.orderId);
            if(order){

                order.paymentStatus = 'paid';
                order.paymentReference = reference;
                order.totalAmount = amount / 100;
                await order.save();
            }
             
            res.redirect('https://joulz-vite-app.vercel.app/payment-success?reference=${reference}');
          }else{
            res.redirect('https://joulz-vite-app.vercel.app/payment-failed?reference=${reference}');


          }

    }
    catch(error){

       console.log(error);
 res.redirect('https://joulz-vite-app.vercel.app/payment-failed?reference=${reference}');

    }

}






