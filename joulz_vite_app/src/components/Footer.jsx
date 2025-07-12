import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'




function Footer(){
   
             return <div style={{backgroundColor:'rgba(0, 0, 0, 0.1)', color: 'black' }} >
       
                   <Container fluid style={{fontFamily: "EB Garamond,serif"}}>
                    <Row>
                        <Col sm = {12}>
                        	


   <p style={{fontWeight:'bold'}} >Get in touch</p>
   <p >Tel: +234 08033500421</p>
   <p >Website: www.tinyurl/intjoulz</p>
  
 </Col>
<br></br><br></br>
 <Col sm = {12}>
                        	


   <p  style={{fontWeight:'bold'}}>Address</p>
   <p >Joulz Interior Limited, No. 14 Admiralty Road Adeola Odeku</p>
   <p  >Company Number | 54566676</p>
   
 </Col>
<br></br><br></br>
 <Col sm = {12}>
                        	


   <p style={{fontWeight:'bold'}}>Copyright</p>
   <p  >2025 | Joulz Interior all rights reserved</p>
   
  
 </Col>
                    </Row>
                   </Container>

          </div>
     
   
     
}  

export default  Footer
