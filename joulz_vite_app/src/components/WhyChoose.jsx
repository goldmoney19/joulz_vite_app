import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import image3 from '../assets/interior1.jpg'
import Footer from './Footer'


const imagg = image3;

function WhyChoose(){
   
             return < > 
      <div className='mx-auto about'>
        <Container className='why_chooseCon'>
       
 <h4 className='why_chooseText'>Why choose us</h4>
          <Row  className='why_choose_row'>
           
            <Col sm = {6}>
                 
                  <img src = {imagg } className='whyChoose_image'/>
            </Col>
            <Col sm = {6}> 
          
 <ul className='whyChoose_text2'> 

    <li>Luxury & Elegance: Every project embodies refined taste and sophistication.</li>
    <li>Tailored to Perfection: No two designs are the same—we create spaces that reflect individuality.</li>
    <li>Uncompromising Quality: We work with the finest materials, artisans, and suppliers.</li>
    <li>Attention to Detail: Every element is thoughtfully curated to create a cohesive and breathtaking design.</li>
    <li> Seamless Execution: Our professional project management ensures efficiency, transparency, and excellence.</li>
  </ul>
<br></br>
 
            </Col>
          </Row>

        </Container>
       



        </div>
          </>
     
   
     
}  

export default  WhyChoose