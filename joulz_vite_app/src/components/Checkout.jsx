import React from 'react'
import {useState , useEffect} from 'react'
import {Button, Container, Row, Col} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Footer from './Footer';




function Checkout(props){

      

    const [fullname, setFullname] = useState("");
     const [address, setAddress] = useState("");
     const [state, setState] = useState("");


 
    const [formData, setFormData] = useState([]);
   
   
      
 
 useEffect(() => {

              const userDataa = {user_id:localStorage.getItem('user-id')}
                         axios.post("https://joulz-vite-app-backend.onrender.com/api/get_user_cart", userDataa)
                         .then((response)=>{
                          console.log(response)
                          setFormData(response.data.cart)
                     
                         })

                         .catch((error) =>{
                            console.log(error)
                         })

             },[]);

   const navigate = useNavigate();
 
 const handleSubmit = async(e) => {
                   e.preventDefault();
 const dataa = {
    "fullname":fullname,
    "address":address,
    "state":state
  }
const user_id = localStorage.getItem("user-id");
       
    const _data = {dataa, user_id}
            


  
    
 const response = await axios.post("https://joulz-vite-app-backend.onrender.com/check/check_out", _data, {
                    withCredentials: true, // IMPORTANT: Include if your backend CORS has credentials: true
                })
   .then((response)=>{

       
                     console.log(response);
           console.log(response.data.clientOrder._id);
                    //  alert("order successful");
                     toast.success("order placed successfully", {position:"top-right"});
                    // navigate("/order_confirmation", { state: { clientOrder:response.data.clientOrder}});
                  })
                  .catch((error)=>{
                    toast.error("all fields are required", {position:"top-right"});
                     console.log(error)
                  })
 
  }


  const totalPrice = formData.reduce((total, item) => {

    return total + item.productId.price * item.quantity;

   }, 0).toFixed(2);

     return <div  style = {{border:'none',minHeight:'500px',backgroundColor:'white'}}> 

     <Container style = {{border:'none',marginTop:'10px'}}>
          
           

 <Row style = {{border:'none',marginBottom:'120px',paddingTop:'100px'}}>
       
        <Col sm = {6} style = {{textAlign:'left'}}>
         <h4 style = {{fontFamily: "EB Garamond,serif"}}>Delivery Information</h4>
         <br></br>
            <form onSubmit = {handleSubmit}>
      <label></label><br></br>
         <input 
         name='title'
           type='text' 
           style = {{backgroundColor:'white', color:'black',borderRadius:'12px',fontFamily: "EB Garamond,serif"}}
           placeholder = 'fullname'
         value = {fullname} 
           onChange = {(e)=>{setFullname(e.target.value)}} 
           />
        
         <br></br>

         <label></label><br></br>
         <textarea 
         value ={address}
         style = {{backgroundColor:'white', color:'black',
         borderRadius:'12px',fontFamily: "EB Garamond,serif"}}
         placeholder = 'address'
           name='description'
           onChange = {(e)=>{setAddress(e.target.value)}}
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label></label>
         <textarea 
         style = {{backgroundColor:'white', color:'black',borderRadius:'12px',fontFamily: "EB Garamond,serif"}}
         placeholder = 'state'
          value ={state}
        name='design'
           onChange = {(e)=>{setState(e.target.value)}}
           >
           
         </textarea >

         
        
        <br></br>
        <br></br>
        <br></br>
        

        <button  type='submit' 
        style = {{borderRadius:'12px',fontSize:'13px',fontWeight:'bold',fontFamily: "EB Garamond,serif"}}
        className = 'btn btn-sm btn-warning'
        >Place Order</button>
        <br></br>
       
       {fullname}
        </form>
                                
                                      </Col>
       
          
            <Col  sm = {6}>
             <h4  style = {{fontFamily: "EB Garamond,serif"}}>Cart Information</h4>
         <br></br>
                            <table  style = {{border:'none',width:'100%'}}>
                                <thead>
                                    <tr>
                                      <td  style = {{fontFamily: "EB Garamond,serif"}}>title</td>
                                      <td  style = {{fontFamily: "EB Garamond,serif"}}>image</td>
                                      <td  style = {{fontFamily: "EB Garamond,serif"}}>price</td>
                                       <td  style = {{fontFamily: "EB Garamond,serif"}}>quantity</td>
                                        <td  style = {{fontFamily: "EB Garamond,serif"}}>total</td>
                                    </tr>
                                </thead>
                                 <tbody>
                                   { formData.map((item, index) =>(  
                                    <tr key ={index}>
             <td style={{fontSize: '13px',fontFamily: "EB Garamond,serif"}}> {item.productId?.title}</td>
             <td><img style={{height: '50px', width: '50px',fontFamily: "EB Garamond,serif"}}  src = 
       {item.productId.image}></img></td>
       <td style={{fontSize: '13px', fontWeight:"normal",fontFamily: "EB Garamond,serif"}}>$ {item.productId?.price}</td>
    <td  style={{fontSize: '13px', fontWeight:"normal",fontFamily: "EB Garamond,serif"}}>{item.quantity}</td>
 <td style={{fontFamily: "EB Garamond,serif"}}>${(item.productId.price * item.quantity).toFixed(2)}</td>
                                    </tr>
                                                                          ))
}
 

                                </tbody>

                            </table> 
                            <br></br>
                            <h6 style={{fontFamily: "EB Garamond,serif"}}>Subtotal : {totalPrice}</h6>   
            </Col>                               
 </Row>
 <br></br>
  <Row style={{margintop:"150px"}}>
                             <Col>
                               <Footer />
                             </Col>
                            </Row>
</Container>
          </div>
     }  

     export default Checkout
