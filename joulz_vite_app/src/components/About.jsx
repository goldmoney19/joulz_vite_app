// import '../App.css'
import React from 'react'
import {Container, Row, Col,Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import image3 from '../assets/uju2.jpg'
import image2 from '../assets/mission.jpeg'
import image1 from '../assets/vision.png'
import Footer from './Footer'


const imagg3 = image3;
const imagg2 = image2;
const imagg1 = image1;

function About(){
   console.log("about page");
             return <> 
      <div>
     
       <Container fluid className='aboutPage_con'>
       
 <h3>Founder's Message</h3><br></br>
          <Row className='mx-auto about_pageCover'> 
           
            <Col sm = {6} className='founderImg'>
                 
                  <img src = {imagg3 }
                      />
            </Col>
            <Col sm = {6}> 
            <p className='founderText' >
“Design is not just about creating beautiful spaces; it’s about telling a story, evoking 
emotion, and enhancing the way people live and work. At Joulz Interiors, we take pride in
 bringing visions to life, infusing each project with passion, precision, and a touch of 
timeless luxury. Every client is unique, and our mission is to craft interiors that 
celebrate their personality while delivering the highest standards of quality and
 sophistication.”</p>
            </Col>
          </Row>


<Row className='ourStory_row'>
  <Col>
   <h4 className='ourStory_text1'>Our Story</h4>

   <p className='ourStory_text2'>Joulz Interiors was born out of a passion for exquisite spaces and the desire to bring 
world-class luxury design to homes and businesses in Nigeria and beyond. What started as a 
love for transforming interiors has grown into a full-fledged design firm recognized for its 
creativity, attention to detail, and refined aesthetic.

Our design philosophy is rooted in the belief that spaces should not only be beautiful but
 also meaningful and functional. Whether it’s a modern penthouse, a stylish office, or a 
luxurious hotel, we curate every element to reflect elegance, comfort, and individuality.</p>
  </Col>
</Row>



<Row >
  <Col className='mission_cover'>
 
    <img src = {imagg2 }
                       style={{height:150, width:'300px'}}/>

 
    <ul >
      <li>To curate breathtaking interiors that harmonize aesthetics with functionality.</li>
      <li>To provide personalized, high-quality design experiences tailored to each client’s
 lifestyle.</li>
      <li>To incorporate global design trends while celebrating local artistry and craftsmanship.</li>
    </ul>
  </Col>
</Row>
<br></br><br></br>

<Row>
  <Col className='vision_cover'>
 
    <img src = {imagg1 }
                       style={{height:130, width:'250px'}}/>

 
    <ul style={{listStyleType:'none'}}>
      <li>To be Africa’s leading luxury interior design firm, redefining sophistication and setting 
new benchmarks in bespoke interior solutions.</li>
    </ul>

  </Col>
</Row>
<br></br>
<br></br>
<Row>
  <Col>
  <Footer />
  </Col>
</Row>
        </Container>
       



        </div>
          </>
     
   
     
}  

export default  About
