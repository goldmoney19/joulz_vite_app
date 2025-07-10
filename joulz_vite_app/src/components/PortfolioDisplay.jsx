import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import {useState , useEffect} from 'react'
import axios from 'axios';
import '../App.css'


import Cookies from "cookie-universal"

const cookies = new Cookies();


function PortfolioDisplay() {

      const token = cookies.get("access-token");
  const [isLoading, setIsLoading] = useState(true);
   const [products, setProducts] = useState([]);

                     useEffect(()=>{
                        const fetchData = async(req, res) => {
        
                        try{
                 const response = await axios.get("https://joulz-vite-app-backend.onrender.com/portDisp/portfolio_display" , {
                 withCredentials: true,
                headers:{
                          Authorization:`Bearer ${token}`

                }
               } )
                  setProducts(response.data);
         
                           }
                     catch (error) {
             console.log("error while fetching", error) 
            }finally{

            setIsLoading(false);
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
               
        <p className='portfolio_text2' style={{fontFamily: "EB Garamond,serif"}}>
         Joulz Interiors has successfully designed and executed luxury homes,
        high-end corporate offices, premium retail stores,Let’s Create Something Extraordinary </p>
                    </Col>
                </Row>

                {
                     isLoading ? (
                     <div style={{color:"red"}}>loading...</div>
                   ):( 
                <Row className=''>

                   
                   
                   {
                   
                   products.map((item, index) => (
                    <Col  key = {index} xs = {6} sm={3} style={{marginTop:'50px'}}>
                    <div >
             <Nav.Link href ={`/Portfolio_details/` +item._id} type='button'><img  style={{height: '150px', width: '150px'}}  src = {item.image}
                       /></Nav.Link>
                       <br></br>
                      <p  className='shop_textTitle' style = {{fontFamily: "EB Garamond,serif"}}>{item.title}</p>

                        {/* <span style={{fontSize: '13px', fontWeight:"bold"}} className='shop_text3'>${item.price}</span> */}
                        
                     {/* <span><button type='button' style={{backgroundColor: 'white', width: '130px', color: 'black'}}>add to cart</button></span>  */}
                    </div>
                    </Col>

                   ))
                   
                   
                   } 
                   
                
                </Row>
  ) }
             </Container>
                          
    
          </div> )
     }  

     export default PortfolioDisplay
