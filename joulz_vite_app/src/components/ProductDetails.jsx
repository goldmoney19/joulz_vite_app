import React from 'react'
import {useState , useEffect} from 'react'
import {Container, Row, Col,Nav} from 'react-bootstrap'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';





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
            const response = await axios.get(`http://localhost:8000/api/product/${id} `);

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
            
         axios.post("http://localhost:8000/api/add_To_cart" , _data)

          .then(response=>{
                     console.log(response.data);
                     //  alert("product added to cart");
                       toast.success("product added to cart");
                     navigate("/userCart");
                  
                  })
                  .catch((error)=>{

                     console.log(error)
                  })
       }

     return  <div > 
             <Container>
              
             <Nav.Link href ="/shop" className='btn btn-secondary'>more products</Nav.Link>

                <Row className='details_text_row3' >

                   
                  
                   {
                   
                 <Col  key = {penthause.id} sm = {6} >
                    <div >
                         <p className='details_text3'>{penthause.title}</p>
                      <img  style={{height: '150px', width: '200px'}}  src = {`http://localhost:8000/${penthause?.image}`}
                       />
                        <p className='details_text3'>${penthause.price}</p>
                        <span className='details_text3' style={{fontSize: '13px'}}>{penthause.description}</span>
                       
 <br></br>
     <br></br>
                     <label>qty</label>  : 

                          <input
                           type = 'Number' 
                           min="1"
                           value = {quantity}
                           onChange={(e) =>{
                              setQuantity(e.target.value);
                           }}
                           />
                           {quantity}
                        <br></br>
                         <br></br>
                        <button type='button' onClick={()=>{
                              
                              // setProductId(penthause.id)
                                   handleAddToCart(penthause._id)
                        }} style={{backgroundColor: 'black', width: '130px', color: 'white'}}>add to cart</button>
                    </div>
                    </Col>

                  
                   
                   
                   } 
                   
                 
                </Row>

             </Container>
    
          </div> 
     }  

     export default ProductDetails