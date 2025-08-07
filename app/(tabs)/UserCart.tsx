import axios from 'axios';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';
      


const { width: screenWidth } = Dimensions.get('window');







export default function UserCart(){

   const { isLoggedIn } = useAuth();

    interface Product{
                _id:string;
             quantity:string;
              title:string;
              price:number;
               productId: {
    title: string;
    price: number;
     image: string; // optional if you're not using it
  };
             
                             
            }

     const [bart, setBart] =  useState<Product[]>([]);
        const [isLoading, setIsLoading] = useState(true);
                 const hasNavigated = useRef(false);
        
      
      
               
     useEffect(() => {
      
       
       
         const fetchUsers = async() => {
          
                  try{

                      const token = await SecureStore.getItemAsync('userToken');
                        if (token) {
               const userDataa = {user_id: await SecureStore.getItemAsync('userId')}
                      const response = await axios.post('https://joulz-vite-app-backend.onrender.com/api/get_user_cart' , userDataa)

                  const result = response.data.cart;
                             console.log(result); 
                           setBart(result)
                        }

   
         }
         catch(error){

           console.log(error)

         }finally{

            setIsLoading(false);
         }
                 
                   
         
                
                 
                }
            fetchUsers();
                   }, []);


  //   const totalPrice = bart.reduce((total, item) => {

  //   return total + item.productId.price * item.quantity;

  //  }, 0).toFixed(2);


   const handleDeleteCart = async(product_id:string) =>{
    alert("delete")
// try{
//          const user = localStorage.getItem('user-id');
//          const userr = user;

//         const response = await axios.post("https://joulz-vite-app-backend.onrender.com/api/cart/delete",{product_id,userr});
          
//         console.log(response.data.cart)
//         setBart(response.data.cart);
        
//         //   if(response.data && Array.isArray((await response).data.cart)){
//         // setBart(response.data.cart);
//         //   }else{
//         //     console.log('invalid cart response');
//         //   }
// }catch(error){
// console.log(error);
  
// }
   }

   if (!isLoggedIn) {
    
setTimeout(() => {
        router.replace('/');
      }, 100)

   }

     
               return ( 

              
                 <View style = {styles.container}> 
                   <ScrollView>

  {
      
           bart ? ( bart.map((item) =>(
    
    <View  key = {item._id}  style = {styles.box}>

       
                    
                           {/* <td>
                           <img style={{height: '70px', width: '70px'}}  src = 
{`http://localhost:8000/${item.productId?.image}`}></img></td> */}
   <Image source={{ uri: item.productId?.image, cache: 'reload' }}
                              style={styles.productImage}
                                     onError={(error) => console.log('Image load error for', item._id, ':', error.nativeEvent.error)}
                              
                                        />
     <Text  style = {styles.portfolioText}>{item.productId?.title}</ Text>
    <Text style = {styles.portfolioPrice}>${item.productId?.price}</Text>
   <Text style = {styles.portfolioQty}> {item.quantity}</Text>
  <Text style = {styles.portfolioTotal}> ${(item.productId?.price * parseInt(item.quantity)).toFixed(2)}</Text>
                                         
          <TouchableOpacity
                     
                     key={item._id}
                     onPress={() => handleDeleteCart(item._id)} // Pass the product ID
                      style={styles.deleteBttn} 
                   >
               <Text style={styles.portfolioCover}>delete</Text>
                         </TouchableOpacity>
                        
                   </View>))): (<Text>no cart</Text>)

 }
                        <TouchableOpacity
                         style={styles.checkoutBttn}
                     onPress={() => {
                 router.push("/checkout");
                       }} >
   <Text style={styles.checkout} >Checkout</Text>
              
    </TouchableOpacity>

     <TouchableOpacity
       
         onPress={() => {
      router.push("/")
             }}
          style={styles.backShopBttn}
             >
 <Text style={styles.continueShopping} >Continue shopping</Text>
             </TouchableOpacity>
           
                   </ScrollView>
                   
              
                  
                  
        
             </View>
                 )
     
   
     
}  


const styles = StyleSheet.create({
         container:{
          flex:1,
          backgroundColor:"white",
         
         
        
         },


          box:{
        flexDirection:"row",
          backgroundColor:"white",
       marginTop:40,
        flexWrap:"wrap",
       width:screenWidth * 1.0,
      
         
        
         },
         portfolioPrice:{
         fontFamily:"EBGaramondRegular",
          fontSize:18,
          paddingLeft:10,
          height:80,
          color:"black",
          fontWeight:"condensedBold",
          alignSelf:"center"

           },


            portfolioTotal:{
         fontFamily:"EBGaramondRegular",
          fontSize:18,
            paddingLeft:10,
          height:80,
          color:"black",
          fontWeight:"condensedBold",
          alignSelf:"center"

           },

            portfolioQty:{
         paddingLeft:5,
          fontSize:18,
        fontFamily:"EBGaramondRegular",
          height:80,
          color:"black",
          fontWeight:"condensedBold",
          alignSelf:"center"

           },

        portfolioText:{

        fontFamily:"EBGaramondRegular",
          fontSize:17,
       width:49,
          height:60,
          color:"black",
          fontWeight:"bold"

           },

            portfolioCover:{
         
         
        
          color:"white",
          fontWeight:"condensedBold",
          fontSize:16,
        fontFamily:"EBGaramondRegular",
          alignSelf:"center"

           },


            continueShopping:{
                 fontFamily:"EBGaramondRegular",

            color:"white",
          fontWeight:"condensedBold",
          fontSize:16,
        
          alignSelf:"center"

           },

            backShopBttn:{
         
               width:150,
          height:25,
           backgroundColor:"brown",
          alignSelf:"flex-end"

           },

           

              checkout:{
     
         
          color:"white",
          fontWeight:"condensedBold",
          fontSize:16,
          alignSelf:"center",
        
      fontFamily:"EBGaramondRegular",
           },

           checkoutBttn:{
     
          width:90,
          height:25,
         
        
          backgroundColor:"black",
          alignSelf:"flex-start",
          marginLeft:20,
     
           },

            productImage:{ 
          width:50,
          height:40,
          marginRight:6,
          marginLeft:5
        },

          deleteBttn:{ 
         backgroundColor:"black",
          height:23,
          marginLeft:9,
          width:75
          
        },
})