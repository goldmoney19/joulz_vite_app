import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import {useState , useEffect} from 'react'
import axios from 'axios';


import Cookies from "cookie-universal"

const cookies = new Cookies();


function PortfolioDisplay() {

      const token = cookies.get("access-token");

   const [products, setProducts] = useState([]);

                     useEffect(()=>{
                        const fetchData = async(req, res) => {
        
                        try{
                 const response = await axios.get("http://localhost:8000/portDisp/portfolio_display" )
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
             <Container className='portfolio_con'>
                <Row className='portfolio_text_row'>
                    <Col>
                    <h4 className='portfolio_text' style={{fontFamily: "EB Garamond,serif"}}>Our Portfolio</h4>
               
        <p className='portfolio_text2'>
         Joulz Interiors has successfully designed and executed luxury homes,
        high-end corporate offices, premium retail stores, and boutique hospitality
      spaces. Our work blends modern elegance with timeless charm, delivering a signature aesthetic that stands out.
     Let’s Create Something Extraordinary</p>
                    </Col>
                </Row>

                <Row className='shop_row2'>
                    <Col>
                    <p className='shop_text2'> </p>
                    </Col>
                </Row>

                <Row className=''>

                   
                   
                   {
                   
                   products.map((item, index) => (
                    <Col  key = {index} sm = {3} style={{marginTop:'50px'}}>
                    <div >
                       <Nav.Link href ={`/productDetails/` +item._id} type='button'><img  style={{height: '200px', width: '250px'}}  src = {`http://localhost:8000/${item?.image}`}
                       /></Nav.Link>
                       <br></br>
                      <p style={{fontSize: '18px'}} className='shop_text3'>{item.title}</p>

                        {/* <span style={{fontSize: '13px', fontWeight:"bold"}} className='shop_text3'>${item.price}</span> */}
                        
                     {/* <span><button type='button' style={{backgroundColor: 'white', width: '130px', color: 'black'}}>add to cart</button></span>  */}
                    </div>
                    </Col>

                   ))
                   
                   
                   } 
                   
                
                </Row>

             </Container>
    
          </div> )
     }  

     export default PortfolioDisplay