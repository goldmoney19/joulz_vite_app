import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import Cookies from "cookie-universal"
import toast from 'react-hot-toast';


const cookies = new Cookies();
      
  


function Navvbar() {

  const token = document.cookie
 const navigate = useNavigate();

 
  const LogoutUser = () => {

          cookies.remove("PHPSESSID");
          cookies.remove("access-token");
          localStorage.removeItem("email");
           localStorage.removeItem("user");
            localStorage.removeItem("user-id");
        
         toast.success("Logout successful", {position:"top-right"});

          navigate("/");

  }
      
      return( <div>

<Navbar collapseOnSelect expand="lg" className="navbarr_body  navbar-dark " fixed="top" style={{backgroundColor:"black"}}>
      <Container style={{fontFamily: "EB Garamond,serif"}}>
        <Navbar.Brand href="/">Joulz Interiors</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href ="/">Home</Nav.Link>
          
          <Nav.Link href ="/profile_page">Profile</Nav.Link>
            <Nav.Link href ="/About">About us</Nav.Link>
             <Nav.Link href ="/portfolio_display">Portfolios</Nav.Link>
             <Nav.Link href ="/shop">Shop</Nav.Link>
            <Nav.Link href ="/userCart">Cart</Nav.Link>
            
           {token? (
            <>
            
            
            <Nav.Link href ="" onClick={LogoutUser}>logout</Nav.Link>
            

            </>
            ):(
                 <>
                 <Nav.Link href ="/contact" >Contact us</Nav.Link>
    <Nav.Link href ="/login" >Login</Nav.Link>
<Nav.Link href ="/Register" >Signup</Nav.Link>


        </>
          ) }

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
        
     

      )

}

export default Navvbar
