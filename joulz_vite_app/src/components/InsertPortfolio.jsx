import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



function InsertPortfolio(props){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [design, setDesign] = useState("");
    const [image, setImage] = useState("");
    const [multipleImages, setMultipleImages] = useState("");


   
  const navigate = useNavigate();
  
    const handleSubmit  = async(e) => {
                   e.preventDefault();

 
  const formData = new FormData();

formData.append("title",title)
formData.append("description",description)
formData.append("design",design)
formData.append("image",image)
multipleImages.forEach((imaggs)=> formData.append('multipleImages', imaggs))

console.log(formData);

                    const portf = {title , description, design, image}
                   
                   await axios.post("http://localhost:8000/api/portfolio", formData)
                  .then((response)=>{
                     console.log("portfolio inserted");
                     navigate("/person");
                  })
                  .catch((error)=>{
                    toast.error(error.response.data.message, {position:"top-right"});
                     console.error(error)
                  })

          


    }



     return <div> 
        <br></br>
         <h2>Add Portfolio</h2>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>

         <label>title</label><br></br>
         <input 
         id='title'
           type='text'  
          name ="title"
           value = {title} 
           onChange = {(e) => 
            setTitle(e.target.value)
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
   <label>design</label><br></br>
         <textarea
         id="design" 
         name = "design"
         value ={design}
           onChange = {(e) => 
            setDesign(e.target.value)
          }
           >
           
         </textarea >

         <br></br>
         <br></br>
         <input type='file' name="image"  onChange={(e) => 
            setImage(e.target.files[0])}/>
<br>
</br><br></br>
        <label>multiple images</label> <input type='file' accept="image/*" multiple name="multipleImages"  onChange={(e) => 
            setMultipleImages(Array.from(e.target.files))}/>
  
<br>
</br><br></br>
         
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

        <button  type='submit' className='btn btn-primary'>submit</button>
        <br></br>
       
       
        </form>
        {/* <p>{title}</p>

     <p>{description}</p> 

      <p>{design}</p> 
      <p>{image}</p>  */}
     
     


      



          </div>
     }  

     export default InsertPortfolio