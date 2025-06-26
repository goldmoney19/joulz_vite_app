import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from "cookie-universal"
import toast from 'react-hot-toast';

const cookies = new Cookies();
  const token = cookies.get("access-token");
    
    //  console.log(token);

function Login(){

   
    const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

   
    

   const navigate = useNavigate();
      const handleSubmit  = async(e) => {
                     e.preventDefault();

                     try{

                      const dataa = {
                                       "email":email,
                                       "password":password,
    
                                     }

                                    //  console.log(dataa);
  
                    //   const portf = {title , description, design, image}
                     
                  const result =  await axios.post("http://localhost:8000/authService/login", dataa ,{
                          headers:{

                            "Content-Type":"application/json"
                          }

                     })
                    console.log(result)

 // localStorage.setItem("token", response.data.token)
                        // console.log(response.data.token);
         cookies.set("access-token", result.data.token ,{ maxAge:60*60*24*30*1000 });
        // cookies.set("user-id", result.data.userId ,{ maxAge:60*60*24*30*1000 }); 
        localStorage.setItem("user-id", result.data.userId);
        localStorage.setItem("user", result.data.useRole);
        localStorage.setItem("email", result.data.useEmail);
                      //  console.log(result);
                      //  navigate("/");
                      if(result.data.useRole== "admin"){
                        navigate("/admin_dashboard");
                      }else{
                         navigate("/profile_page");
                      }
                    
                     }

                     

                    
                    catch(error){
                    toast.success('wrong credentials', {position:"top-right"});
                       console.log(error)
                    }
  
            
  
  
      }
   
             return <div> 
        <br></br>
         <h2>Login</h2>
        <form onSubmit={handleSubmit}>

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
         <input type='password' 
         id="password"
          value ={password}
           name = "password"
           onChange = {(e) => 
            setPassword(e.target.value)
          }
           />
           
        
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

        <button  type='submit' className='btn btn-primary'>login</button>
        <br></br>
       
       
        </form>
        <p>{email}</p>

     <p>{password}</p> 

     
     
     


      



          </div>
     
   
     
}  

export default  Login