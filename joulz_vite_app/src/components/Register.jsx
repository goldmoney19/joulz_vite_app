import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';




function Register(props){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  // const dataa = {
  //   "title":title,
  //   "description":description,
  //   "design":design,
  //    "displayImage":image
  // }
  

//  const [formData, setFormData] = useState(dataa);

  //  const onchangeHandler = (e) => {
  //                const {name, value} = e.target;
  //                console.log(name, value);
                 
  //                setFormData({...formData, [name]:value});

  //  }
 
   
  const navigate = useNavigate();
    const handleSubmit  = async(e) => {
                   e.preventDefault();

 
  const formData = {
    "email":email,
    "password":password
  }

console.log(formData);

                    const portf = {email , password}
                   
                   await axios.post("http://localhost:8000/api/user", formData)
                  .then((response)=>{
                     console.log("user inserted");
                    toast.success(response.data.message, {position:"top-right"});
                    navigate("/login");
                  })
                  .catch((error)=>{

                     console.log(error)
                  })

          


    }



     return <div> 
        <br></br>
         <h2>Register</h2>
        <form onSubmit={handleSubmit} encType='multipart/form-data'>

         <label>Email</label><br></br>
         <input 
         id='email'
           type='email'  
          name ="email"
           value = {email} 
           onChange = {(e) => 
            setEmail(e.target.value)
          } 
           />
         <br></br>
         <br></br>

         <label>password</label><br></br>
         <textarea 
         id="password"
          value ={password}
           name = "password"
           onChange = {(e) => 
            setPassword(e.target.value)
          }
           >
           
         </textarea >
        <br></br>
     
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

        <button  type='submit' className='btn btn-primary'>register</button>
        <br></br>
       
       
        </form>
        {/* <p>{title}</p>

     <p>{description}</p> 

      <p>{design}</p> 
      <p>{image}</p>  */}
     
     


      



          </div>
     }  

     export default Register