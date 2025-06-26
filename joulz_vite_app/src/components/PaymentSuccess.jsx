import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import toast from 'react-hot-toast';




const PaymentSuccess = () => {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams()
   const reference = searchParams.get('reference');

   useEffect(()=>{

    if(reference){

        console.log('payment successful');
         toast.success('payment successful', {position:"top-right"});
    }else{
  navigate('/profile_page');

    }
   });

   return(
       <>
        <h4>payment successful</h4>
        <p>transaction reference:{reference}</p>
        </>
       
   )

}


export default  PaymentSuccess