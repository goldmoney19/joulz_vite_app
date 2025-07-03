import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate , useParams} from 'react-router-dom';




function UpdateePortfolio(props){
   //  const [title, setTitle] = useState("");
   //   const [description, setDescription] = useState("");
   //   const [design, setDesign] = useState("");


    const dataa = {
    title:"",
    description:"",
    design:""
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
                         axios.get(`import.meta.env.VITE_APP_API_URL/api/portfolio/${id}`)
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

                  //   const portf = {title , description, design}
                   await axios.put(`import.meta.env.VITE_APP_API_URL/api/update/portfolio/${id}`, formData)
                  .then((response)=>{
                     console.log("portfolio inserted");
                     navigate("/person");
                  })
                  .catch((error)=>{

                     console.log(error)
                  })

                  //  console.log(portf);
           

    }



     return <div> 
        <br></br>
         <h2>Edit Portfolio</h2>
        <form onSubmit={handleSubmit}>

         <label>Portfolio Title</label><br></br>
         <input 
         name='title'
           type='text'  
         value = {formData.title} 
           onChange = {onchangeHandler} 
           />
         <br></br>
         <br></br>

         <label>portfolio Description</label><br></br>
         <textarea 
         value ={formData.description}
           name='description'
           onChange = {onchangeHandler}
           >
           
         </textarea >
        <br></br>
        <br></br>
   <label>portfolio Design</label><br></br>
         <input
          value ={formData.design}
        name='design'
           onChange = {onchangeHandler}
           />
           
        

         
       
        <br></br>
        <br></br>

        <button  type='submit'>update</button>
        <br></br>
       
       
        </form>
       
     


      



          </div>
     }  

     export default UpdateePortfolio
