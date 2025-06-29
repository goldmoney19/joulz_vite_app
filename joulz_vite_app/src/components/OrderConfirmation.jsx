import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Container, Row, Col} from 'react-bootstrap'

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




            
            return <div style = {{border:'',width:'100%',
 paddingTop:'50px'}}> 
            
   <Container style = {{border:'none',marginTop:'10px'}}>

 <Row style = {{border:'none',marginBottom:'120px',paddingTop:'100px'}}>
 <Col sm= {12} className = 'table-responsive'>
 <h6>Your Order Has Been Placed Successfully</h6>
             <table className = 'table table-striped table-bordered ' style = {{width:'90%',}}>
             <thead>
                 <tr>
                 <td>Name</td>
                  <td>Address</td>
                    <td>State</td>
                    <td>item</td>
                     <td>price</td>
                      <td>quantity</td>
                      </tr>
                                </thead>

                                 <tbody>
                                 {order.items?.map((item, index) =>(
             
       
                                    <tr>
                                     <td>{order.fullname}</td>
                                       <td>{order.address}</td>
                                       <td>order.state</td>
                                      <td>{item.title}</td>
                                     
                                      <td>${item.price.toFixed(2)}</td>
                                       <td> {item.quantity}</td>
                                       
                                    </tr>
                                      ))}
                                </tbody>
                                </table>
      
    
         
        
        <br></br>
       <p style = {{fontWeight:'bold'}}>subtotal : {order.totalPrice}</p>
        
<br></br>
<br></br>
<br></br>
<br></br>
  <button type='button' 
        className = 'btn btn-sm btn-dark'
        style = {{width:'190px',textAlign:'center'}} 
        onClick={handlePayment}
        >Pay with Paystack</button>
      
</Col>

        </Row>
</Container>
          </div>
     
   
     
}  

export default  OrderConfirmation