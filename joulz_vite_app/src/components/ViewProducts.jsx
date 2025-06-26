import React from 'react'
import {useState , useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {Container, Nav, Navbar,NavLink} from 'react-bootstrap'
 const user = localStorage.getItem('user');


import Cookies from "cookie-universal"

const cookies = new Cookies();

function ViewProducts(){
   const navigate = useNavigate();
   
   const token = cookies.get("access-token");
                         
 const [products, setProducts] = useState([]);


 useEffect(()=>{

        if(user !== 'admin'){

        console.log("forbiddden");
         navigate("/");
    }
                const fetchData = async(req, res) => {

                try{
         const response = await axios.get("http://localhost:8000/api/products" , {
                headers:{
                          Authorization:`Bearer ${token}`

                }
               })
             
       setProducts(response.data)
        
                   }
             catch (error) {
     console.log("error while fetching", error) 
    }

                }

fetchData();
             },[]);
     
     return <div> 
           <br></br>
           
      { console.log(products)}
         <div className='display_users'> 
             <Nav.Link href ="/InsertProduct" className='btn btn-secondary'>add product</Nav.Link>
                         <h3>View All Products</h3>
                <table className='table table-bordered table-striped'>
      
                   <thead>
                       <tr>
                           <th>s/n</th>
                           <th>Title</th>
                           <th>Description</th>
                           <th>Price</th>
                           <th>Category</th>
                           <th>Keyword</th>
                           <th>Image</th>
                           <th>Edit</th>
                           <th>Delete</th>
                       </tr>
                   </thead>
   
                   <tbody>
   
   
                      {products.map((prodts, index)=>{
                        
                         return (
                       <tr>
            <td>{index + 1}</td>
             <td>{prodts.title}</td>
             <td>{prodts.description}</td>
             <td>{prodts.price}</td>
              <td>{prodts.category}</td>
               <td>{prodts.keyword}</td>
               
              <td><img style={{height: '150px', width: '150px'}}  src = {`http://localhost:8000/${prodts?.image}`}></img></td>
              {/* {console.log(`http://localhost:8000/${prodts?.image}`)} */}
              <td className='btn btn-warning btn-sm'> <Nav.Link href ={`/updatePortfolio/` +prodts._id} type='button'>edit</Nav.Link></td>
          <td className='btn btn-danger btn-sm'> <Nav.Link  onClick = {()=>deleteProduct(prodts._id)}>delete</Nav.Link></td>
        </tr>
   
                         )
   
                        })}
                   
   
                   </tbody>
                </table>
       
             </div>
   
   
   
   
             </div>
     
}  

export default  ViewProducts