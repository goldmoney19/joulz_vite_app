import React from 'react'
import {useState , useEffect} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink, Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
 const user = localStorage.getItem('user');


import Cookies from "cookie-universal"

const cookies = new Cookies();


function Person(props){
    
    const token = cookies.get("access-token");
   
const navigate = useNavigate();
   
                 
 const [portfolios, setPortfolios] = useState([]);

 useEffect(()=>{

  if(user !== 'admin'){

        console.log("forbiddden");
         navigate("/");
    }
                const fetchData = async(req, res) => {

                try{
         const response = await axios.get("https://joulz-vite-app-backend.onrender.com/api/portfolios" , {
                 withCredentials: true,
                headers:{
                          Authorization:`Bearer ${token}`

                }
               })
       setPortfolio(response.data)
                   }
             catch (error) {
     console.log("error while fetching", error) 
    }

                }

fetchData();
             },[]);



   const deletePortfolio = async (userId) => {
         await axios.delete(`https://joulz-vite-app-backend.onrender.com/api/delete/portfolio/${userId}`)
        .then((response) => {
        setPortfolio((prevUser)=>prevUser.filter((user)=>user._id !==userId))

        })
        .catch((error)=>{

                     console.log(error)
                  })

   }


     return <div> 
     
       <Container fluid style = {{paddingTop:'70px'}}>
             <Row>
             <Col sm = {2} style = {{border:'1px solid grey',height:'450px'}}>
       
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
        <br></br>
                            <Col sm = {10} style = {{border:'1px solid grey',height:'450px', overflowY:'scroll'}}>

   
      <div className='display_users table-responsive' > 
          
                      <h6>All Portfolios</h6>
             <table className='table table-bordered table-striped'>
   
                <thead>
                    <tr>
                        <th>s/n</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Design</th>
                        <th>image</th>
                          <th>multiple images</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>

                <tbody>


                   {portfolios.map((portff, index)=>{
                     
                      return (
                    <tr>
         <td>{index + 1}</td>
          <td>{portff.title}</td>
          <td>{portff.description}</td>
          <td>{portff.design}</td>
           <td><img style={{height: '30px', width: '30px'}}  src = {portff.image}></img></td>
          <td>
            {portff.multipleImages.map((img, index) => (

                          <img key ={index} style={{height: '30px', width: '30px'}}  src = {img}></img>

            ))}
            
            </td>

           {console.log({portff.image}}
           <td className='btn btn-warning btn-sm'> <Nav.Link href ={`/updatePortfolio/` +portff._id} type='button'>edit</Nav.Link></td>
       <td className='btn btn-danger btn-sm'> <Nav.Link  onClick = {()=>deletePortfolio(portff._id)}>delete</Nav.Link></td>
     </tr>

                      )

                     })}
                

                </tbody>
             </table>
    
          </div>
</Col>

 </Row>
</Container> 
          </div>
     }  

export default  Person
