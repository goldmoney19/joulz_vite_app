import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import image4 from '../assets/interior2.jpg'
import Footer from './Footer'


const imagg = image4;

function AboutDisplay(){
   
             return < > 
      <div className='mx-auto '>
        <Container fluid  className='about_cover'>
          <br></br><br></br>
 <h4 className='about_text'>About Us</h4><br></br>
          <Row className='about_row'>
           
            <Col sm = {6}>
                 
                  <img src = {imagg }
                       style={{height:400}}/>
            </Col>
            <Col sm = {6}> 
          
 <p  className='about_text2'>
    We're passionate about designing for the built environment and never more so than when
     it relates to kitchens, joinery and construction. THE excitement of a home renovation
      always brings fresh ideas and inspires our design</p>
<br></br>
  <button className="btn btn-sm btn-outline-secondary about_button">
    MORE</button>
            </Col>
          </Row>

        </Container>
       



        </div>
          </>
     
   
     
}  

export default  AboutDisplay