import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image from '../assets/interior1.jpg'
import image1 from '../assets/interior2.jpg'
import image2 from '../assets/interior3.jpg'
import { Container } from 'react-bootstrap'





function Karuzel() {
   
             return  ( 
              <Container fluid className='p-0'>
        <div className='m-0 p-0' style={{fontFamily: "EB Garamond,serif",width:'100%'}}>
        <Carousel fade interval = "1800">
      <Carousel.Item>

       <img
       src = {image}
       className='d-block w-100 '
      
        />

        <Carousel.Caption className='karuzelCaption'>
          <h3>Joulz Interiors</h3>
          <p>Where Luxury Meets Timeless Elegance</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img
       src = {image1}
       className='d-block w-100 banner_img'
        />
        
        <Carousel.Caption className='karuzelCaption'>
          <h3>Joulz Landscape</h3>
          <p>Multi Award Winning Designer.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img
       src = {image2}
       className='d-block w-100 banner_img'
        />
        
        <Carousel.Caption className='karuzelCaption'>
          <h3>Joulz Apparel</h3>
          <p>
          Specialist in Bespoke, Kitchens, Furniture & Joinery.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </Container>
  );
       

       
}  

export default Karuzel