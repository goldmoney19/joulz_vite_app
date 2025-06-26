import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Cookies from "cookie-universal"

const cookies = new Cookies();

function OrderConfirmation(){
   const token = cookies.get("access-token");
   const {state}  = useLocation();
   const order = state?.clientOrder || {};
   const email = localStorage.getItem('email');

  //  const {fullname, address,state:userState,items,totalPrice,_id} = state || {};



const handlePayment = async() =>{
try{
   const response = await axios.post('http://localhost:8000/api/payment/initialize', {

        email:email,
        amount:order.totalPrice,
        orderId:order._id

         
      }
     );
     console.log('payment response:',response.data);
     const {authorization_url} = response.data;
     if(!authorization_url){
      throw new Error('no authorizqtion_url in response');
     }
     window.location.href = authorization_url;

  }catch(error){

console.log(error);
  }
}


const totalPrice = order.items.reduce((total, item) => {

    return total + item.productId.price * item.quantity;

   }, 0).toFixed(2);


//   console.log(order.fullname);
//   console.log(address);
//    console.log(state);
//  console.log(order.items);
//  console.log(order._id);
//   console.log(order.totalPrice);
            
            return <div> 
        <p>order confimation</p>
        <p>{order.fullname}</p>
         <p>{order.address}</p> 
         <p>{order.state}</p>
    
         {order.items?.map((item, index) =>(
             <div key = {index}>
       
          <p>title: {item.title} </p> 
          <p>qty: {item.quantity}</p>  
          <p> price: ${item.price.toFixed(2)}</p> 
         
          </div>
         ))}
        
        <br></br>
       
        <br></br>

        <button type='button' onClick={handlePayment}>Pay with Paystack</button>
          </div>
     
   
     
}  

export default  OrderConfirmation