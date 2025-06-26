import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import {useState , useEffect} from 'react'
import axios from 'axios';


import Cookies from "cookie-universal"

const cookies = new Cookies();


function Shop() {

      const token = cookies.get("access-token");

   const [products, setProducts] = useState([]);

                     useEffect(()=>{
                        const fetchData = async(req, res) => {
        
                        try{
                 const response = await axios.get("http://localhost:8000/shops/shops" )
                  setProducts(response.data);
         
                           }
                     catch (error) {
             console.log("error while fetching", error) 
            }
        
                        }
        
        fetchData();
                     },[]);



             return (
                <div > 
             <Container className='shop_con'>
                <Row className='shop_text_row'>
                    <Col>
                    <h4 className='shop_text'>Products</h4>
                    </Col>
                </Row>

                <Row className='shop_row2'>
                    <Col>
                    <p className='shop_text2'  >Joulz Interiors we work in different aspect
                         of Home Decoration  </p>
                    </Col>
                </Row>

                <Row className='shop_text_row3' >

                   
                   
                   {
                   
                   products.map((item, index) => (
                    <Col  key = {index}  xs = {6} sm={3}>
                    <div >
                       <Nav.Link href ={`/productDetails/` +item._id} type='button'><img  style={{height: '150px', width: '150px'}}  src = {`http://localhost:8000/${item?.image}`}
                       /></Nav.Link>
                      <p  className='shop_text3'>{item.title}</p>

                        <span className='shop_price'>${item.price}</span>
                        <p><Button className='btn btn-sm btn-secondary buy'><Nav.Link href ={`/productDetails/` +item._id}>Buy now</Nav.Link></Button></p>
                        
                    </div>
                    </Col>

                   ))
                   
                   
                   } 
                   
                
                </Row>

             </Container>
    
          </div> )
     }  

     export default Shop