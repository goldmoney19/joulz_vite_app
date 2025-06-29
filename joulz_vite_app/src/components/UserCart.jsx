import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
import {Container, Row, Col, Nav} from 'react-bootstrap'
import Footer from './Footer';



const UserCart = () =>{

     const [bart, setBart] = useState([]);
        const [isLoading, setIsLoading] = useState(true);
      

      
               
     useEffect(()=>{
        const userDataa = {user_id:localStorage.getItem('user-id')}
         const fetchUsers = async() => {
                  try{    
        const response = await axios.post('http://localhost:8000/api/get_user_cart' , userDataa)
   
                  const result = response.data.cart;
                             console.log(result); 
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
                       
                    bart.map((item, index) =>(<>
                         <Col key = {item.id} sm = {6} className='userCart_image'>
                           <img style={{height: '70px', width: '70px'}}  src = 
{`http://localhost:8000/${item.productId?.image}`}></img>
                           </Col>

                       <Col  key = {item.id} sm = {6} className='userCart_discCover'>
                               <div key ={index}>
                    
                              <span className='userCart_title'>  {item.productId?.title} </span>

                <span className='userCart_price'>$ {item.productId?.price}</span>  
                       <span className='userCart_qtyText'></span>  <span className='userCart_qtyNum'>{item.quantity} item(s)</span>
                         
                         <span className='userCart_subtotal'>Total: ${(item.productId.price * item.quantity).toFixed(2)}</span>
                         
                               </div>
                           </Col>
                          
                               </>))
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
                                    

                            <button className='btn btn-warning btn-sm' style={{marginRight:'90px'}}><Nav.Link href ="/checkout" className='btn btn-secondary'>proceed to checkout</Nav.Link></button>
         
                   <button className='btn btn-dark btn-sm'><Nav.Link href ="/shop" className='btn btn-secondary'>continue to shop</Nav.Link></button>
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