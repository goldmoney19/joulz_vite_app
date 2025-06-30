import React from 'react'
import Karuzel from './Karuzel.jsx'
import WeOffer from './WeOffer.jsx'
import Shop from './Shop.jsx'

import PortfolioDisplay from './PortfolioDisplay.jsx'
import Footer from './Footer.jsx'
import AboutDisplay from './AboutDisplay.jsx'
import WhyChoose from './WhyChoose.jsx'






function Home() {

           
   
             return (
                <div > 
           <Karuzel />
            <br></br>
           <br></br>
            <PortfolioDisplay />
           
             <AboutDisplay />
             <br></br>
              <br></br>
         <Shop />
         
          
   <WeOffer />
   <br></br>
    <br></br>
   <WhyChoose />
   <Footer />
          </div> )
     }  

     export default Home
