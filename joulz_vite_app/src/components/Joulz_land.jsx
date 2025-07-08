import React from "react";
import {Container,Col,Row, Nav, Navbar,NavLink,Button} from 'react-bootstrap'
import image3 from '../assets/phone.png'
import image2 from '../assets/mail2.png'
import image4 from '../assets/uju2.jpg'

import image5 from '../assets/whatsapp.png'
import image6 from '../assets/insta.png'
import image7 from '../assets/telegram_logo.png'
import image8 from '../assets/facebook_logo.png'
import image9 from '../assets/joulz_logo.jpg'
import image11 from '../assets/interior2.jpg'

import '../App.css'




const Joulz_land = () => {
   
             return <div> 
                <Container  className="joulz_landContainer">
                    <Row className="joulz_landRow" style={{backgroundColor:"rgba(0,0,0,0.9)", paddingTop: "40px"}}>
                        <Col style = {{marginBottom:"70px"}}>
                        <img src = {image4} style = {{height:"150px", width:"150px", borderRadius:"100%"}} />
                        </Col>
                        <Col className="joulz_landCol" sm = {12} style = {{marginBottom:"70px"}}>
       <div className="col-sm-12 " style = {{marginBottom:"70px",color:"white", fontFamily: "EB Garamond,serif"}}>
   <h1 className="title_text" style = {{fontSize:"19px", fontFamily: "EB Garamond,serif"}}>JOULZ INTERIORS</h1>

		</div>

		<div className="col-sm-12 disc_column1" style={{borderTop:"1px solid white",
		borderBottom:"1px solid white", color:"white", borderRadius:"15px",padding:"15px", fontFamily: "EB Garamond,serif"}}>
   <p className="disc_text" >Joulz Interiors has successfully designed and executed luxury homes,
     high-end corporate offices, premium retail stores, and boutique hospitality spaces.</p>
   </div>
</Col>
   <Col sm = {12} style={{marginBottom:"40px"}}>
		

		<Button className="btn btn-sm" style={{backgroundColor:"black",height:"40px",width:"130px",
             border:"1px solid white",borderRadius:"15px" }}><img src={image3} style={{height:"20px",width:"30px"}} />
             </Button>
	

		<button className="btn btn-sm" style={{backgroundColor:"black",height:"40px",width:"130px",
             border:"1px solid white",borderRadius:"15px"}}><img src={image2} style={{height:"20px", width:"30px"}} />
             </button>
	

	
        </Col>

        <Col>
        
        	<div className="row starpge_cover2">


		<div className="col-sm-12 whatsapp_column1" style={{marginBottom:"40px"}}>
  <button type="button" className="btn btn-lg btn-outline-light" style={{height:"60px"}}><a href ="https://wa.me/23408033500421"
   style={{color:"white", textDecoration:"none"}}><img src = {image5} style={{height: "35px",
  width: "35px",marginRight: "20px",backgroundSize: "cover",backgroundRepeat: "no-repeat", borderRadius: "25px"}} />
  <span style={{fontSize:"14px",color:"white",fontFamily: "EB Garamond,serif"}}>CONNECT ON WHATSAPP</span></a></button>

		</div>


<div className="col-sm-12 instagram_column1" style={{marginBottom:"40px"}}>
  <button type="button" className="btn btn-lg btn-outline-light" style={{height:"60px"}}><a href ="https://www.instagram.com/jujuumobi_/"
   style={{color:"white",textDecoration:"none"}}><img src = {image6} style={{height: "35px",
  width: "35px",marginRight: "20px",backgroundSize: "cover",backgroundRepeat: "no-repeat", borderRadius: "25px"}} />
  <span style={{fontSize:"14px",color:"white",fontFamily: "EB Garamond,serif"}}>FOLLOW ON INSTAGRAM</span></a></button>

		</div>

		<div className="col-sm-12 telegram_column1" style={{marginBottom:"40px"}}>
  <button type="button" className="btn btn-lg btn-outline-light" style={{height:"60px"}}><a href ="https://t.me/+23408033500421"
   style={{color:"white", textDecoration:"none"}}><img src = {image7} style={{height: "35px",
  width: "35px",marginRight: "20px",backgroundSize: "cover",backgroundRepeat: "no-repeat", borderRadius: "25px"}}/>
  <span style={{fontSize:"14px",color:"white",fontFamily: "EB Garamond,serif"}}>CONNECT ON TELEGRAM</span></a></button>

		</div>

    

    


       

		<div className="col-sm-12 facebook_column1" style={{marginBottom:"40px"}}>
  <button type="button" className="btn btn-lg btn-outline-light" style={{height:"60px"}}><a href ="https://www.facebook.com/uju.amobi1/" 
  style={{color:"white", textDecoration:"none"}}><img src = {image8} style={{height: "35px",
  width: "35px",marginRight: "20px",backgroundSize: "cover",backgroundRepeat: "no-repeat", borderRadius: "25px"}}/>
  <span style={{fontSize:"14px",color:"white",fontFamily: "EB Garamond,serif"}}>FOLLOW ON FACEBOOK</span></a></button>

		</div>


		<div className="col-sm-12 visitwebsite_column1" style={{marginBottom:"40px"}}>
  <button type="button" className="btn btn-lg btn-outline-light" style={{height:"80px"}}><a href ="https://joulz-vite-app.vercel.app "
   style={{color:"white", textDecoration:"none"}}><img src = {image9} style={{height: "35px",
  width: "35px",marginRight: "20px",backgroundSize: "cover",backgroundRepeat: "no-repeat", borderRadius: "25px"}}/>
  <span style={{fontSize:"14px",color:"white",fontFamily: "EB Garamond,serif"}}>VISIT OUR WEBSITE</span></a></button>

		</div>

		

	</div>
        
        <div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles" ><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>
<div className="bubbles"><span className="dot"></span></div>

        </Col>
        </Row>
        </Container>
          </div>
     
   
     
}  

export default  Joulz_land
