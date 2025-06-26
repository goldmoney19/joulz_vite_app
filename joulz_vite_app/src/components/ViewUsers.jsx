import {react} from 'react'
import {Button} from 'react-bootstrap'
import { useState, useEffect } from 'react';
import axios from 'axios';
 import { useNavigate } from 'react-router-dom';
 const user = localStorage.getItem('user');

import Cookies from "cookie-universal"

const cookies = new Cookies();

 
function ViewUsers() {
   
    const token = cookies.get("access-token");

    // console.log(token);
    
const [portfolios, setPortfolio] = useState([]);
             const navigate = useNavigate();

    

   useEffect(()=>{

    if(user !== 'admin'){

        console.log("forbiddden");
         navigate("/");
    }
     const fetchUsers = async() => {
                    try{
            const response = await axios.get("http://localhost:8000/api/users" , {
                headers:{
                          Authorization:`Bearer ${token}`

                }
               });

               const result = await response.data;
                             console.log(result); 
                            setPortfolio(response.data)
    }                           
                     catch (error) {
     console.log("error while fetching", error) 
    }
     }
        
                    fetchUsers();
               }, [token]);
             return (
               
                <div className='display_users'> 
                      <h5>View All users</h5>
             <table className='table table-bordered table=striped'>
   
                <thead>
                    <tr>
                        <td>s/n</td>
                        <td>name</td>
                        <td>email</td>
                        
                        <td>delete</td>
                    </tr>
                </thead>

                <tbody>

                    {
                    
                    portfolios.map((portff, index)=>{
                        return (
                           <tr>
                        <td>{index + 1}</td>
                        <td>{portff.name}</td>
                        <td>{portff.email}</td>
                       
                       
                        <td><Button>Delete</Button></td>
                    </tr>
                     )
                         

                    })
                    }
                 
                </tbody>
             </table>
   
          </div> )
     }  

     export default ViewUsers