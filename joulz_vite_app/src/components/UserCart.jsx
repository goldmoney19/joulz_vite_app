import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';


import Cookies from "cookie-universal"

const cookies = new Cookies();

const UserCart = () =>{

     const [bart, setBart] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
      

      
               
     useEffect(()=>{
      const  user = localStorage.getItem('user-id');
        const userDataa = {user_id:localStorage.getItem('user-id')}
         const fetchUsers = async() => {
                  try{    
        const response = await axios.post('https://joulz-backend.onrender.com/api/get_user_cart' , userDataa)
   
                  const result = response.data.cart;
                            //  console.log(result); 
                           setBart(result)
         }
         catch(error){

           console.log(error)

         }finally{

            setIsLoading(false);
         }
                 
                   
         
                
                 
                }
            fetchUsers();
                   }, []);


    const totalPrice = bart.reduce((total, item) => {

    return total + item.productId.price * item.quantity;

   }, 0).toFixed(2);

const navigate = useNavigate();
   const handleDeleteCart = async(product_id) =>{
    
try{
         const user = localStorage.getItem('user-id');
         const userr = user;

        const response = await axios.post("https://joulz-backend.onrender.com/api/cart/delete",{product_id,userr});
          
        console.log(response.data.cart)
        setBart(response.data.cart);
        
        //   if(response.data && Array.isArray((await response).data.cart)){
        // setBart(response.data.cart);
        //   }else{
        //     console.log('invalid cart response');
        //   }
}catch(error){
console.log(error.response?.data);
  
}
   }

               return ( 
                 <div> 
                  <Container className='userCart_row'>
                  
                  <h3>Cart</h3>
                  <br></br>
                        <Row  >
                     {
                     isLoading ? (
                     <div>loading...</div>
                   ):(

                    <table>
                      <thead>
                        <tr>
                          <td>image </td>
                           <td>title </td>
                            <td>price </td>
                             <td>quantity </td>
                              <td>total</td>
                               <td>delete </td>
                        </tr>
                      </thead>
                       <tbody>
  {bart.map((item, index) =>(<>
                        <tr>
                           <td>
                           <img style={{height: '70px', width: '70px'}}  src = 
{`https://joulz-backend.onrender.com/${item.productId?.image}`}></img></td>
                                       <td>{item.productId?.title}</td>
                                       <td>{item.productId?.price}</td>
                                      <td>{item.quantity}</td>
                                        <td>${(item.productId.price * item.quantity).toFixed(2)}</td>
                                         
                                     <td><button className='btn btn-sm btn-danger' onClick={()=>handleDeleteCart(item.productId._id)}>delete</button></td>
                          </tr>
                   </>))}
                               </tbody>
                               </table>
                   )


                            }
                     

                            </Row>
                            <Row className="UserCart_totalPriceCover">
                                <Col sm={12}>

                                <h3 className = 'UserCart_totalText'>Cart Total</h3>
                           <div style={{width:'100%'}}>
                                <table style={{width:'100%'}}>
                                    <thead>
                                    <tr>
                                    <th >Subtotal </th>
                                    <th style={{ textAlign:'right'}}>${totalPrice}</th>
                                    </tr>
                                    </thead>

                                </table>
                                </div>

                            <p className = 'UserCart_totalNum'>subtotal:  ${totalPrice}</p>

                                </Col>
                                <Col sm={12}>
                                    

                            <button className='btn btn-outline-warning btn-sm' style={{marginRight:'90px', color:'black'}}><Nav.Link href ="/checkout" >Checkout</Nav.Link></button>
         
                   <button className='btn btn-outline-success btn-sm' style = {{color:'black'}}><Nav.Link href ="/shop" >continue to shop</Nav.Link></button>
                                </Col>
                              
                            </Row>
                            <Row style={{margintop:"50px"}}>
                             <Col>
                               <Footer />
                             </Col>
                            </Row>
                       </Container>
                   </div>
                    )
     
   
     
}  

export default  UserCart
