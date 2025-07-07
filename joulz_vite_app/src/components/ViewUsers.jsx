import {react} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink,Button} from 'react-bootstrap'
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
            const response = await axios.get("https://joulz-vite-app-backend.onrender.com/api/users" , {
                 withCredentials: true,
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
                  <Container fluid style = {{paddingTop:'70px'}}>
                  <Row>
                    <Col style = {{border:'1px solid grey',height:'450px'}} sm = {2}>
       
        <br></br>
        <div>
       
        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/admin_dashboard" >Panel</Nav.Link>
        </div>
<br></br>
        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewUsers" >view users</Nav.Link>
        </div>
         <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertPortfolio"  >add portfolio</Nav.Link>

          </div>
          <br></br>

           <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/person" className='btn btn-secondary'>view portfolio</Nav.Link>
          </div> 
           <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertProduct" className='btn btn-secondary'>add product</Nav.Link>
            </div>
            <br></br>
             <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewProducts" className='btn btn-secondary'>view product</Nav.Link>
                     </div>
                    </div>
              </Col>

              <Col sm = {10} style = {{border:'1px solid grey',height:'500px'}}>
                      <h6>All users</h6>
             <table className='table table-bordered table=striped'>
   
                <thead>
                    <tr>
                        <td>s/n</td>
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
                       
                        <td>{portff.email}</td>
                       
                       
                        <td><Button>Delete</Button></td>
                    </tr>
                     )
                         

                    })
                    }
                 
                </tbody>
             </table>
             </Col>
             </Row>
       </Container>
          </div> )
     }  

     export default ViewUsers
