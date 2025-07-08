import React from 'react'
import {useState , useEffect} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navvbar from './components/Navvbar.jsx'
 const user = localStorage.getItem('user');
 import Cookies from "cookie-universal"
const cookies = new Cookies();


function ProfilePage(){



  const navigate = useNavigate();
   
   const token = cookies.get("access-token");
                         
 const [products, setProducts] = useState([]);


//  useEffect(()=>{

//     //     if(user !== 'customer'){

//     //     console.log("forbiddden");
//     //      navigate("/");
//     // }
//                 const fetchData = async(req, res) => {

//                 try{
//          const response = await axios.get("http://localhost:8000/api/products" , {
//                 headers:{
//                           Authorization:`Bearer ${token}`

//                 }
//                })
             
//        setProducts(response.data)
        
//                    }
//              catch (error) {
//      console.log("error while fetching", error) 
//     }

//                 }

// fetchData();
//              },[]);

   
             return <div> 
      <Container fluid style = {{paddingTop:'70px'}}>
             <Row>

                       <Col sm = {2} style = {{border:'1px solid grey',height:'450px'}}>
                         <div>
       
        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/profile_page" >Panel</Nav.Link>
        </div>
<br></br>
        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="#" >My Orders</Nav.Link>
        </div>
         <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="#"  >Edit Profile</Nav.Link>

          </div>
          <br></br>

         
                    </div>
              </Col>

           <br></br>
            <Col sm = {10} style = {{border:'1px solid grey',height:'500px',overflowY:'scroll'}}>
      { console.log(products)}
        
   <h2> My Profile </h2>
         </Col>
             </Row>
       </Container>
          </div>
     
   
     
}  

export default  ProfilePage
