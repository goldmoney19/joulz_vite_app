import React from 'react'
import {Container,Col,Row, Nav, Navbar,NavLink} from 'react-bootstrap'




function AdminDashboard(){
   
             return <div sm = {2}> 

             <Container fluid style = {{paddingTop:'70px'}}>
             <Row>
            <Col style = {{border:'1px solid grey',height:'450px'}}>
       
        <br></br>
        <div>
        
         <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/admin_dashboard" >Panel</Nav.Link>
        </div>
<br></br>


        <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewUsers" >view users</Nav.Link>
        </div>
         <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertPortfolio"  >add prortfolio</Nav.Link>

          </div>
          <br></br>

           <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/person" className='btn btn-secondary'>view portfolio</Nav.Link>
          </div> 
           <br></br>
            <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/insertProduct" className='btn btn-secondary'>add product</Nav.Link>
            </div>
            <br></br>
             <div style={{border:'1px solid grey'}}>
                    <Nav.Link href ="/viewProducts" className='btn btn-secondary'>view product</Nav.Link>
                     </div>
                    </div>
              </Col>
               
               <Col sm = {10} style = {{border:'1px solid grey',height:'500px'}}>
                    <div>
                     
                       <h6 style = {{fontWeight:'bold'}}>ADMIN PANEL</h6>
                       <p>all orders</p> 
                     <p>total users</p> 
                       <p>total portfolios</p> 
                      <p>total products</p>
                    

                    </div>
                    </Col>
                 </Row>
                    </Container>
          </div>
     
   
     
}  

export default  AdminDashboard