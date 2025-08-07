import Footer from '@/components/Footer';
import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');



export default function productDetails() {
  

     interface Details{
               _id:string;
              title:string;
              description:string;
              image:string;
              price:number;
                             
            }

   const [penthause, setPenthause] =  useState<Details[]>([]);
     const [quantity , setQuantity] =  useState("1");
      
      const { id } = useLocalSearchParams();
    
   console.log('Product ID:', id);
  

   useEffect(()=>{
     const fetchUsers = async () => {
                    try{
                     
                      if (!id) {
          console.error('No product ID provided');
          return;
        }
            const response = await axios.get(`https://joulz-vite-app-backend.onrender.com/api/product/${id}`);

               const result = await response.data;
                            console.log(result); 
                            setPenthause(result)
    }
                     catch (error) {
     console.log("error while fetching", error) 
    }
     }
        
                    fetchUsers();
               }, [id]);


      const handleProductPress = async (productId: string) => {
      //const  data = {prodid:productId,qty:quantity}
          // alert(data.qty);
          //  alert(data.prodid);
      
        const storedUserId = await SecureStore.getItemAsync('userId');
      //    const produktId = prodId;
        

         console.log({productId, storedUserId, quantity}); 

                  
        const _data = {productId,quantity, storedUserId}
            
        const response = await axios.post("https://joulz-vite-app-backend.onrender.com/api/add_To_cart" , _data)

          .then(response=>{
                     console.log(response.data);
                    console.log("product added to cart");
                 
                 router.push("/UserCart")
                  
                  })
                  .catch((error)=>{
                // toast.error("Signup or Login to Add Cart");
                     console.log({"details no gree show" :error})
                  })
       }

       


    return(

        <View style={styles.container}>
          <ScrollView >
                 
                  {
                                   
                <View style = {styles.portfolioCover} key = {penthause._id}>
                  
                 <Image source={{ uri: penthause.image, cache: 'reload' }}
                  style={styles.productImage}
              onError={(error) => console.log('Image load error for',penthause._id, ':', error.nativeEvent.error)}
       
                 />
       
                <Text  style = {styles.portfolioTitle}>{penthause.title}</Text>
       
                 <Text  style = {styles.portfolioPrice}>${penthause.price}</Text>
                   <Text  style = {styles.portfolioDisc}>{penthause.description}</Text>
                  
                   </View>
                                   
                     }
                  <View>

               
                    <Text>Qty</Text>
   

                          <TextInput
                          
                           style = {styles.textInput}
                           value = {quantity}
                           onChangeText={setQuantity}
                           />
                           {/* {quantity} */}
                      
                     <TouchableOpacity
                             style={styles.portfolioButton}
                             key={penthause._id}
                             onPress={() => handleProductPress(penthause._id)} // Pass the product ID
                           ><Text style={styles.portfolioText}>Add to Cart</Text></TouchableOpacity>
                     </View>
<View>

  <Footer />
</View>
                 
                  </ScrollView>
                  </View>

                 
    )
}









const styles = StyleSheet.create({
         container:{
          flex:1,
          backgroundColor:"white",
        //   borderWidth:2,
        //   borderColor:"blue",
        
           justifyContent:"center",
         
         
          margin:0,
          paddingTop:20

       
          
         },

        portfolioCover:{
          width:screenWidth * 1.0,
          minHeight:520,
          marginBottom:30,
          // borderWidth:2,
          // borderColor:"red"
         
           },

         productImage:{ 
          width:screenWidth * 0.95,
          alignSelf:"center",
        height:300
        },

         portfolioTitle:{
          fontSize:15,
          paddingLeft:20,
          paddingTop:10,
          fontFamily:"EBGaramondRegular"
         },
         

          portfolioPrice:{
          fontSize:15,
          paddingLeft:20,
          paddingTop:10,
          fontFamily:"EBGaramondRegular"
         },
         portfolioDisc:{
          fontSize:15,
            paddingLeft:20,
          paddingTop:20,
          fontFamily:"EBGaramondRegular"
        },

         textInput:{
          fontSize:15,
          width:100,
          marginBottom:30,
            borderWidth:2,
            borderColor:"black",
            borderRadius:12,
            paddingLeft:9,
          fontFamily:"EBGaramondRegular"
        },
        
          portfolioButton:{
          fontSize:15,
          width:100,
          marginBottom:30,
            borderWidth:2,
            borderColor:"black",
            borderRadius:8,
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
        },

         portfolioText:{
          fontSize:15,
         
        
            borderColor:"black",
            borderRadius:8,
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
        }
         

}) 