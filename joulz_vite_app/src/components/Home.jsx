import React from 'react'
import Karuzel from './karuzel'
import WeOffer from './WeOffer'
import Shop from './Shop'
import Portfolio from '../../../server/model/Portfolio'
import PortfolioDisplay from './PortfolioDisplay'
import Footer from './Footer'
import AboutDisplay from './AboutDisplay'
import WhyChoose from './WhyChoose'






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