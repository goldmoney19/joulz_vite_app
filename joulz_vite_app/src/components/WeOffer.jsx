import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import image4 from '../assets/interior1.jpg'
import image5 from '../assets/interior2.jpg'
import image6 from '../assets/interior3.jpg'




function WeOffer() {

         const weOffer_info = [

            {   id:1,
                image : image4,
             text:"interior decoration",
            },

            {
                id:2,
                image : image5,
                text:"outdoor deco",
            },

            {
                id:3,
                image : image6,
                text:"Kitchen overhaul",
            },

           

         ];



             return (
                <div > 
             <Container  className='whatWeOffer_con'>
                <Row >
                    <Col>
                    <h4 className='whatweoffer_text'>What we offer</h4>
                    </Col>
                </Row>

                <Row className=''>
                    <Col>
                    <p className='whatWeOffer_text2'>Joulz Interiors we work in different aspect
                         of Home Decoration  Our work blends modern elegance with timeless charm,
                         delivering a signature aesthetic that stands out. Let's Create Something 
                         Extraordinary</p>
                    </Col>
                </Row>

                <Row >

                   
                   
                   {
                   
                   weOffer_info.map((item) => (
                    <Col  key = {item.id} sm = {4}  >
                    <div >
                        
                       <img src = {item.image}
                       style={{height:200, marginTop:'30px'}}/>
                       
                        <p className='we_offername'>{item.text}</p>
                    </div>
                    </Col>
        

        
                   ))
                   
                   
                   } 
                   
                
                </Row>

             </Container>
    
          </div> )
     }  

     export default WeOffer