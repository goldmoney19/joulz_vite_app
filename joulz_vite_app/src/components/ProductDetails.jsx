import React from 'react'
import {useState , useEffect} from 'react'
import {Container, Row, Col,Nav,Button} from 'react-bootstrap'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../App.css'
import Shop from './Shop';




import Cookies from "cookie-universal"

const cookies = new Cookies();
   


const ProductDetails = () => {

   const token = cookies.get("access-token");

   const [penthause, setPenthause] = useState([]);
   const [productId, setProductId] = useState("");
     const [quantity , setQuantity] =  useState("1");
      
      const {id} = useParams();
    
   
  

   useEffect(()=>{
     const fetchUsers = async() => {
                    try{
            const response = await axios.get(`https://joulz-vite-app-backend.onrender.com/api/product/${id}`);

               const result = await response.data;
                             console.log(result); 
                            setPenthause(result)
    }
                     catch (error) {
     console.log("error while fetching", error) 
    }
     }
        
                    fetchUsers();
               }, [id]);
 const navigate = useNavigate();


       function handleAddToCart(prodId){
            const user_id = localStorage.getItem("user-id");
         const produktId = prodId;
        

         // console.log({prodId:produktId, user_id}); 

                  
         const _data = {productId:produktId,quantity, user_id}
            
         axios.post("https://joulz-vite-app-backend.onrender.com/api/add_To_cart" , _data)

          .then(response=>{
                     console.log(response.data);
                     //  alert("product added to cart");
                       toast.success("product added to cart");
                     navigate("/userCart");
                  
                  })
                  .catch((error)=>{
                toast.error("Signup or Login to Add Cart");
                     console.log(error)
                  })
       }

     return  <div > 
             <Container fluid className='details_cover' >
              
<h4 className='details_text1'> Product Details</h4>
                <Row >

                   
                  
                   {
                   <>
                   <Col key = {penthause.id} sm = {6}  >
                    <img  style={{height: '400px', width: '100%'}}  src = {penthause.image}
                       />

                   </Col>
                   

                  <Col  key = {penthause.id} sm = {6} >
                    <div >
                     <br></br><br></br>
                         <p className='details_text2'>{penthause.title}</p>
                       <p className='details_text3' >{penthause.description}</p>
                       
                        <p className='details_text4'>${penthause.price}</p>
                      
 <br></br>
     <br></br>
     <div className='quantity_cover'>
                     <label style = {{fontWeight:'bold', marginRight:'20px'}}>Quantity  : </label> 
   

                          <input
                           type = 'Number' 
                           min="1"
                           value = {quantity}
                           onChange={(e) =>{
                              setQuantity(e.target.value);
                           }}
                           />
                           {/* {quantity} */}
                      
                       <p ><button type='button' className='btn btn-sm' onClick={()=>{
                              
                              // setProductId(penthause.id)
                                   handleAddToCart(penthause._id)
    }} >Add To cart</button></p>
    </div>
                    </div>
                    <br></br>
                    <br></br>
                     {/* <Nav.Link href ="/shop" ><button className='btn btn-outline-secondary btn-sm'>More Products</button></Nav.Link> */}

                    </Col>

                  
                   
                   
                  </> } 
                   

                </Row>

                <Row>

                  <Col>
                 
                  <Shop />
                  </Col>
                </Row>

             </Container>
    
          </div> 
     }  

     export default ProductDetails
