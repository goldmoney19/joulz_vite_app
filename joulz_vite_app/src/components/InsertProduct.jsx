import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function InsertProduct(props){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
    
    const [keyword, setKeyword] = useState("");
    const [image, setImage] = useState("");


 
   
 const navigate = useNavigate();
    const handleSubmit  = async(e) => {
                   e.preventDefault();

 
  const formData = new FormData();
 formData.append("title",title)
formData.append("description",description)
formData.append("price",price)

formData.append("keyword",keyword)
 formData.append("image",image)

console.log(formData);

                    // const portf = {title , description, design, image}
                   
                   await axios.post("http://localhost:8000/api/product", formData)
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
         <h2>Add Product</h2>
        <form onSubmit={handleSubmit}  encType='multipart/form-data'>

         <label>title</label><br></br>
         <input 
         id='title'
           type='text'  
          name ="title"
           value = {title} 
           onChange = {(e) => setTitle(e.target.value)
          } 
           />
         <br></br>
         <br></br>

         <label>description</label><br></br>
         <textarea 
         id="description"
          value ={description}
           name = "description"
           onChange = {(e) => 
            setDescription(e.target.value)
          }
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label>price</label><br></br>
         <input 
         id='price'
           type='text'  
          name ="price"
           value = {price} 
           onChange = {(e) => 
            setPrice(e.target.value)
          } 
           />

            <br></br>
        <br></br>
           
       
<label>keyword</label><br></br>
         <input 
         id='keyword'
           type='text'  
          name ="keyword"
           value = {keyword} 
           onChange = {(e) => 
            setKeyword(e.target.value)
          } 
           />
         <br></br>
         <br></br>
         <input type='file' name="image"  onChange={(e) => 
            setImage(e.target.files[0])}/>

      
        <br></br>
        <br></br>

        <button  type='submit' className='btn btn-primary'>Insert</button>
        <br></br>
       
       
        </form>
        {/* <p>{title}</p>

     <p>{description}</p> 

      <p>{design}</p> 
      <p>{image}</p>  */}
     
     


      



          </div>
     }  

     export default InsertProduct