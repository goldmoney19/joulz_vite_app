import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




function Checkout(props){

      

    const [fullname, setFullname] = useState("");
     const [address, setAddress] = useState("");
     const [state, setState] = useState("");


 
    const [formData, setFormData] = useState([]);
   
   
      
 
 useEffect(() => {

              const userDataa = {user_id:localStorage.getItem('user-id')}
                         axios.post("http://localhost:8000/api/get_user_cart", userDataa)
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
            


  
    
 const response = await axios.post("http://localhost:8000/check/check_out", _data)
   .then((response)=>{

       
                     console.log(response.status);
                    //  alert("order successful");
                     toast.success("order placed successfully", {position:"top-right"});
                    navigate("/order_confirmation", { state: { clientOrder:response.data.clientOrder}});
                  })
                  .catch((error)=>{

                     console.log(error)
                  })
 
  }


  const totalPrice = formData.reduce((total, item) => {

    return total + item.productId.price * item.quantity;

   }, 0).toFixed(2);

     return <div> 
        <br></br>
         <h2>checkout  </h2>
       
        { formData.map((item, index) =>(
    
            <div key ={index}>
                           
            <p style={{fontSize: '13px'}}>  {item.productId?.title} </p>
       <img style={{height: '50px', width: '50px'}}  src = 
       {`http://localhost:8000/${item.productId?.image}`}></img>
     <p style={{fontSize: '13px', fontWeight:"bold"}}>$ {item.productId?.price}</p>  
             <span>qty :</span>  <span style={{fontSize: '13px', fontWeight:"bold"}}>{item.quantity}</span>
                                
            <p>total: ${(item.productId.price * item.quantity).toFixed(2)}</p>
            <br></br>
            <br></br>
                                
                                      </div>
                                  
                                  
                                      ))
                                    }
                                     <h3>Tatal Amount : {totalPrice}</h3>  
        <form onSubmit = {handleSubmit}>
      <label>fullname</label><br></br>
         <input 
         name='title'
           type='text'  
         value = {fullname} 
           onChange = {(e)=>{setFullname(e.target.value)}} 
           />
         <br></br>
         <br></br>

         <label>address</label><br></br>
         <textarea 
         value ={address}
           name='description'
           onChange = {(e)=>{setAddress(e.target.value)}}
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label>state</label><br></br>
         <textarea 
          value ={state}
        name='design'
           onChange = {(e)=>{setState(e.target.value)}}
           >
           
         </textarea >

         
        {/* <label>category</label>
        <select 
           value={author}
           onChange = {(e) => setAuthor(e.target.value)}
        >
          <option value="kitchen">kitchen</option>
          <option value="pool">pool</option>
        </select> */}
        <br></br>
        <br></br>

        <button  type='submit'>submit order</button>
        <br></br>
       
       {fullname}
        </form>
        {/* <p>{title}</p>

     <p>{description}</p> 
      */}
     


      



          </div>
     }  

     export default Checkout