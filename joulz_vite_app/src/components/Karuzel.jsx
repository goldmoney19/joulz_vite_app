import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import image from '../assets/interior1.jpg'
import image1 from '../assets/interior2.jpg'
import image2 from '../assets/interior3.jpg'
import { Container } from 'react-bootstrap'
import telegram from '../assets/telelogo.png'
import facebook from '../assets/facelogo.png'
import whatsapp from '../assets/whatsapp-256.png'
import instagram from '../assets/insta.png'






function Karuzel() {
   
             return  ( 
              <Container fluid className='p-0'>
          
        <div className='m-0 p-0' style={{fontFamily: "EB Garamond,serif",width:'100%'}}>
        <Carousel fade interval = "4000">
      <Carousel.Item>

       <img
       src = {image1}
       className='d-block w-100 banner_img'
      
        />

        <Carousel.Caption className='karuzelCaption  caption_cover' >
          <p className="caption_text1">Joulz Interiors</p>
          <p className="caption_text2">Where Luxury Meets Timeless Elegance</p>
           <div className="hero">
        <a href=""><button className="btn btn-outline-light portfolio_btn">portfolio</button></a>
        <a href=""><button className="btn btn-outline-light shop_btn">shop</button></a>
      </div>

      <div className="link_cover">
      <a href="https://t.me/+2348033500421"><button className="btn link_btnn"><img src = {telegram }
                       /></button></a>
      
      <a href="https://wa.me/234803500421"><button className="btn link_btnn"><img src = {whatsapp }
                       /></button></a>
      
      <a href="https://www.instagram.com/joulz_interiors?igsh=bHo3OVma2drYW8w"><button className="btn link_btnn"><img src = {instagram }
                      /></button></a>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img
       src = {image2}
       className='d-block w-100 banner_img'
        />
        
        <Carousel.Caption className='karuzelCaption caption_cover'>
          <p className="caption_text1">Joulz Landscape</p>
          <p className="caption_text2">Multi Award Winning Designer.</p>
           <div className="hero">
        <a href=""><button className="btn btn-outline-light portfolio_btn">portfolio</button></a>
        <a href=""><button className="btn btn-outline-light shop_btn">shop</button></a>
      </div>

      <div className="link_cover">
      <a href=""><button className="btn link_btnn"><img src = {telegram }
                       /></button></a>
      <a href=""><button className="btn link_btnn"><img src = {facebook }
                       /></button></a>
      <a href=""><button className="btn link_btnn"><img src = {whatsapp }
                       /></button></a>
      
      <a href=""><button className="btn link_btnn"><img src = {instagram }
                      /></button></a>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
      <img
       src = {image}
       className='d-block w-100 banner_img'
        />
        
        <Carousel.Caption className='karuzelCaption caption_cover'>
          <p className="caption_text1">Joulz Apparel</p>
          <p className="caption_text2">
          Specialist in Bespoke, Kitchens, Furniture , Joinery.
          </p>
           <div className="hero">
        <a href=""><button className="btn btn-outline-light portfolio_btn">portfolio</button></a>
        <a href=""><button className="btn btn-outline-light shop_btn">shop</button></a>
      </div>

      <div className="link_cover">
      <a href=""><button className="btn link_btnn"><img src = {telegram }
                       /></button></a>
      <a href=""><button className="btn link_btnn"><img src = {facebook }
                       /></button></a>
      <a href=""><button className="btn link_btnn"><img src = {whatsapp }
                       /></button></a>
      
      <a href=""><button className="btn link_btnn"><img src = {instagram }
                      /></button></a>
      </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </Container>
  );
       

       
}  

export default Karuzel
