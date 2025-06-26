import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Container, Nav, Navbar,NavLink,Row} from 'react-bootstrap'
 const user = localStorage.getItem('user');


import Cookies from "cookie-universal"

const cookies = new Cookies();


function Person(props){
    
    const token = cookies.get("access-token");
   
const navigate = useNavigate();
   
                 
 const [portfolios, setPortfolio] = useState([]);

 useEffect(()=>{

  if(user !== 'admin'){

        console.log("forbiddden");
         navigate("/");
    }
                const fetchData = async(req, res) => {

                try{
         const response = await axios.get("http://localhost:8000/api/portfolios" , {
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
         await axios.delete(`http://localhost:8000/api/delete/portfolio/${userId}`)
        .then((response) => {
        setPortfolio((prevUser)=>prevUser.filter((user)=>user._id !==userId))

        })
        .catch((error)=>{

                     console.log(error)
                  })

   }


     return <div> 
      {/* <Container style={{border: '2px solid red'}}>
        <Row> */}
        <br></br>
        
   
      <div className='display_users'> 
          <Nav.Link href ="/InsertPortfolio">add portfolio</Nav.Link>
                      <h3>View All Portfolios</h3>
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
           <td><img style={{height: '150px', width: '150px'}}  src = {`http://localhost:8000/${portff?.image}`}></img></td>
          <td>
            {portff.multipleImages.map((img, index) => (

                          <img key ={index} style={{height: '150px', width: '150px'}}  src = {`http://localhost:8000/${img}`}></img>

            ))}
            
            </td>

           {console.log(`http://localhost:8000/${portff?.image}`)}
           <td className='btn btn-warning btn-sm'> <Nav.Link href ={`/updatePortfolio/` +portff._id} type='button'>edit</Nav.Link></td>
       <td className='btn btn-danger btn-sm'> <Nav.Link  onClick = {()=>deletePortfolio(portff._id)}>delete</Nav.Link></td>
     </tr>

                      )

                     })}
                

                </tbody>
             </table>
    
          </div>


{/* </Row>
</Container> */}
          </div>
     }  

export default  Person