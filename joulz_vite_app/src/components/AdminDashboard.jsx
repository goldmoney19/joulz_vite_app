import React from 'react'
import {Container, Nav, Navbar,NavLink} from 'react-bootstrap'




function AdminDashboard(){
   
             return <div> 
        <p>Admin Dashboard</p>
        <br></br>
        <div>
                    <Nav.Link href ="/viewUsers" className='btn btn-secondary'><button>view users</button></Nav.Link>

         <br></br>
                    <Nav.Link href ="/insertPortfolio" className='btn btn-secondary'><button>add prortfolio</button></Nav.Link>
          <br></br>
                    <Nav.Link href ="/person" className='btn btn-secondary'><button>view portfolio</button></Nav.Link>
           <br></br>
                    <Nav.Link href ="/insertProduct" className='btn btn-secondary'><button>add product</button></Nav.Link>
            <br></br>
                    <Nav.Link href ="/viewProducts" className='btn btn-secondary'><button>view product</button></Nav.Link>
                    </div><div>
                     
                      <p>todays orders</p> 
                       <p>all orders</p> 
                     <p>total users</p> 
                       <p>total portfolios</p> 
                      <p>total products</p>
                    

                    </div>
          </div>
     
   
     
}  

export default  AdminDashboard