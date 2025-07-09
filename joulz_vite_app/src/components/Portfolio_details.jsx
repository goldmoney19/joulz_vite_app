import React from 'react'
import {useState , useEffect} from 'react'
import {Container, Row, Col,Nav,Button} from 'react-bootstrap'
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import '../App.css'
import Footer from './Footer';






import Cookies from "cookie-universal"
import PortfolioDisplay from './PortfolioDisplay';

const cookies = new Cookies();
   


const Portfolio_details = () => {

   const token = cookies.get("access-token");

   const [penthause, setPenthause] = useState([]);
   // const [productId, setProductId] = useState("");
    //  const [quantity , setQuantity] =  useState("1");
      
      const {id} = useParams();
    
   
  

   useEffect(()=>{
     const fetchUsers = async() => {
                    try{
            const response = await axios.get(`https://joulz-vite-app-backend.onrender.com/api/portfolio/${id} `);

               const result = await response.data;
                             console.log(result); 
                            setPenthause(result)
    }
                     catch (error) {
     console.log("error while fetching", error) 
    }
     }
        
                    fetchUsers();
               }, [id]);
 const navigate = useNavigate();



     return  <div  style={{paddingTop:"70px"}}>

             <Container fluid >
   
                <h4 className='details_text1'> {penthause.title}</h4>
               <Row >
                    <>

                     {penthause?.multipleImages?.map((img, index) => (
                 <Col sm = {12} key ={index} >
     <span><img  style={{height: '400px', width: '50%',marginTop:'40px',marginBottom:'40px'}}  src = {img.url}></img></span>
                 </Col>
            ))}
   
                   
                  </> 
                   

                </Row>
                <br></br>
                  <br></br>
                   <Row>

                  <Col sm={12}>
                   <p className='' style={{fontFamily: "EB Garamond,serif"}}>{penthause.description}</p>
                       <p className='' style={{fontWeight:"bold", fontFamily: "EB Garamond,serif"}} >{penthause.design}</p>
                       
                      
                
                  </Col>
                </Row>

                     <br></br>
                       <br></br>
                  <br></br>
                  <Row>

                  <Col sm={12}>
                   <PortfolioDisplay />
                       
                      
                
                  </Col>
                </Row>

                     <br></br>
                       <br></br>
                  <br></br>
                     <br></br>
                <Row>

                  <Col>
                 
                  <Footer />
                  </Col>
                </Row>

             </Container>
    
          </div> 
     }  

     export default Portfolio_details

