import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedAdminRoute = ({children, allowedRoles}) => {

    const userRole = localStorage.getItem('user');

    if(!userRole || !allowedRoles.includes(userRole)){
        return <Navigate to = "/" replace />
    }
   
           return children;
     
   
     
}  

export default  ProtectedAdminRoute