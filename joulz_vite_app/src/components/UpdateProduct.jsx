import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';




function UpdateProduct(props){


    const dataa = {
    title:"",
    description:"",
    price:""
  }
    const [formData, setFormData] = useState(dataa);
   
   
      
      const {id} = useParams();
      const navigate = useNavigate();
   
      const onchangeHandler = (e) => {
                    const {name, value} = e.target;
                    console.log(name, value);
                    
                    setFormData({...formData, [name]:value});
   
      }

 useEffect(() => {
                         axios.get(`https://joulz-backend.onrender.com/api/product/${id}`)
                         .then((response)=>{
                          console.log(response)
                          setFormData(response.data)
                     
                         })

                         .catch((error) =>{
                            console.log(error)
                         })

             },[id]);

              
    const handleSubmit  = async(e) => {
                   e.preventDefault();

                
                   await axios.put(`https://joulz-backend.onrender.com/api/update/product/${id}`, formData)
                  .then((response)=>{
                     console.log("product inserted");
                     navigate("/viewProducts");
                  })
                  .catch((error)=>{

                     console.log(error)
                  })

                
           

    }



     return <div> 
        <br></br>
         <h2>Edit Product</h2>
        <form onSubmit={handleSubmit}>

         <label>Product Title</label><br></br>
         <input 
         name='title'
           type='text'  
         value = {formData.title} 
           onChange = {onchangeHandler} 
           />
         <br></br>
         <br></br>

         <label>product Description</label><br></br>
         <textarea 
         value ={formData.description}
           name='description'
           onChange = {onchangeHandler}
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label>product Price</label><br></br>
         <input 
         type='number'
          value ={formData.price}
        name='price'
           onChange = {onchangeHandler}
           />
           
         

         
       
        <br></br>
        <br></br>

        <button  type='submit'>update</button>
        <br></br>
       
       
        </form>
        
     


      



          </div>
     }  

     export default UpdateProduct
