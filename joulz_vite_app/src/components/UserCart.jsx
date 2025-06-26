import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
import {Container, Row, Col, Nav} from 'react-bootstrap'




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
                  <Container><br></br>
                  
                  <h3>Cart</h3>
                        <Row className='userCart_text_row3' >
                     {
                     isLoading ? (
                     <div>loading...</div>
                   ):(
                       
                    bart.map((item, index) =>(
                       <Col  key = {item.id} sm = {4} >
                               <div key ={index}>
                    
                              <p style={{fontSize: '13px'}}>  {item.productId?.title} </p>
<img style={{height: '150px', width: '150px'}}  src = 
{`http://localhost:8000/${item.productId?.image}`}></img>
                <p style={{fontSize: '13px', fontWeight:"bold"}}>$ {item.productId?.price}</p>  
                       <span>qty :</span>  <span style={{fontSize: '13px', fontWeight:"bold"}}>{item.quantity}</span>
                         
                         <p>subtotal: ${(item.productId.price * item.quantity).toFixed(2)}</p>
                         
                               </div>
                           </Col>
                               ))
                   )
                            }
                            <p>total price:  ${totalPrice}</p>
                            <span> <button><Nav.Link href ="/checkout" className='btn btn-secondary'>proceed to checkout</Nav.Link></button></span>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
                   <span> <button><Nav.Link href ="/shop" className='btn btn-secondary'>continue to shop</Nav.Link></button></span>

                            </Row>
                       </Container>
                   </div>
                    )
     
   
     
}  

export default  UserCart