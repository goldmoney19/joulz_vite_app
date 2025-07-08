import React from 'react'
import './App.css'
import Home from './components/Home'
import Nav_bar from './components/Nav_bar'

import About from './components/About'
import Contact from './components/Contact'
import Person from './components/Person'
import ViewUsers from './components/ViewUsers'
import InsertPortfolio from './components/InsertPortfolio'
import UpdateePortfolio from './components/UpdateePortfolio'
import Register from './components/Register'
import Login from './components/Login'
import InsertProduct from './components/InsertProduct'
import ViewProducts from './components/ViewProducts'
import ProductDetails from './components/ProductDetails'
import Shop from './components/Shop'
import UserCart from './components/UserCart'
import Checkout from './components/Checkout'
import OrderConfirmation from './components/OrderConfirmation'
import ProfilePage from './components/ProfilePage'
import AdminDashboard from './components/AdminDashboard'
import PaymentSuccess from './components/PaymentSuccess'
import WeOffer from './components/WeOffer'
import PortfolioDisplay from './components/PortfolioDisplay'
import Footer from './components/Footer'
import AboutDisplay from './components/AboutDisplay'
import WhyChoose from './components/WhyChoose'
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import Unauthorized from './components/Unauthorized'
import UpdateProduct from './components/UpdateProduct'
import Joulz_land from './components/Joulz_land'



import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
 

  return (
    <>
      <div>
        <BrowserRouter>
 <Nav_bar />
  <Routes>
      <Route path = "/payment-success" element = {
         <ProtectedAdminRoute allowedRoles={'customer'}>
        <PaymentSuccess />
    </ProtectedAdminRoute>
    } />
  <Route path = "/" element = {<Home />} />
  
  
   <Route path = "/about" element = {<About />} />
   


   

   <Route path = "/insertPortfolio" element = {
     <ProtectedAdminRoute allowedRoles={'admin'}>
    <InsertPortfolio />
    </ProtectedAdminRoute>
    } />
      
   <Route path = "/person" element = {
     <ProtectedAdminRoute allowedRoles={'admin'}>
    <Person />
     </ProtectedAdminRoute>
  } />

      <Route path = "/viewUsers" element = {
         <ProtectedAdminRoute allowedRoles={'admin'}>
        <ViewUsers />
        </ProtectedAdminRoute>
    } />
     
      <Route path = "/updatePortfolio/:id" element = {
        <ProtectedAdminRoute allowedRoles={'admin'}>
        <UpdateePortfolio />
    </ProtectedAdminRoute>
    } />
   
    <Route path = "/register" element = {<Register />} />

<Route path = "/insertProduct" element = {
  <ProtectedAdminRoute allowedRoles={'admin'}>
  <InsertProduct />
</ProtectedAdminRoute>
} />

<Route path = "/viewProducts" element = {
  
  <ViewProducts />

} />

 <Route path = "/login" element = {<Login />} />

 <Route path = "/shop" element = {<Shop />} />

  <Route path = "/userCart" element = {
     
    <UserCart />
 
  } />

    <Route path = "/checkout" element = {
    
      <Checkout />
    
  } />
      
    <Route path = "/order_confirmation" element = {
     
      <OrderConfirmation />
     
  } />

    <Route path = "/profile_page" element = {
       <ProtectedAdminRoute allowedRoles={'customer'}>
      <ProfilePage />
  </ProtectedAdminRoute>
  } />

      <Route path = "/we-offer" element = {<WeOffer />} />

      <Route path = "/portfolio_display" element = {<PortfolioDisplay />} />

       <Route path = "/footer" element = {<Footer />} />

         <Route path = "/unauthorized" element = {<Unauthorized />} />
                        
    <Route path = "/admin_dashboard" element = {
      <ProtectedAdminRoute allowedRoles={'admin'}>
      <AdminDashboard />
      </ProtectedAdminRoute>
      } 
      
      />

    <Route path = "/about_display" element = {<AboutDisplay />} />

    <Route path = "/why_choose" element = {<WhyChoose />} />

        <Route path = "/contact" element = {<Contact />} />

     <Route path = "/joulz_land" element = {<Joulz_land />} />

            <Route path = "/update_product/:id" element = {<UpdateProduct />} />
  <Route path = "/productDetails/:id" element = {<ProductDetails />} />

   </Routes>
   </BrowserRouter>
    
      </div>
     
    </>
  )
}

export default App
