import React from 'react'
import {useState , useEffect} from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
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
         const response = await axios.get("import.meta.env.VITE_APP_API_URL/api/products" , {
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
     
             const deleteProductById = async (userId) => {
                     await axios.delete(`import.meta.env.VITE_APP_API_URL/api/delete/product/${userId}`)
                    .then((response) => {
                    setProducts((prevUser)=>prevUser.filter((user)=>user._id !==userId))
            
                    })
                    .catch((error)=>{
            
                                 console.log(error)
                              })
            
               }



     return <div> 
     <Container fluid style = {{paddingTop:'70px'}}>
             <Row>

                       <Col sm = {2} style = {{border:'1px solid grey',height:'450px'}}>
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
            <Col sm = {10} style = {{border:'1px solid grey',height:'500px',overflowY:'scroll'}}>
      { console.log(products)}
         <div className='display_users'> 
           
                         <h6>All Products</h6>
                <table className='table table-bordered table-striped'>
      
                   <thead>
                       <tr>
                           <th>s/n</th>
                           <th>Title</th>
                           <th>Description</th>
                             <th>small Description</th>
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
             <td style = {{fontSize:'13px'}}>{prodts.description}</td>
              <td style = {{fontSize:'13px'}}>{prodts.smallDescription}</td>
             <td>{prodts.price}</td>
              <td>{prodts.category}</td>
               <td>{prodts.keyword}</td>
               
              <td><img style={{height: '30px', width: '30px'}}  src = {`https://joulz-backend.onrender.com/${prodts?.image}`}></img></td>
              {/* {console.log(`http://localhost:8000/${prodts?.image}`)} */}
              <td className='btn btn-warning btn-sm'> <Nav.Link href ={`/update_product/` +prodts._id} type='button'>edit</Nav.Link></td>
          <td className='btn btn-danger btn-sm'> <Nav.Link  onClick = {()=>deleteProductById(prodts._id)}>delete</Nav.Link></td>
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

export default  ViewProducts
