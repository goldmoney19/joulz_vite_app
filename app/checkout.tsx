import axios from 'axios';
import { router } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import React, { useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
const { width: screenWidth } = Dimensions.get('window');





export default function checkout() {

 const [fullname, setFullname] = useState("");
     const [address, setAddress] = useState("");
     const [state, setState] = useState("");



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
    const [formData, setFormData] = useState<Product[]>([]);



     useEffect(() => {
                       const fetchData = async() => {
                        try {
                       const userDataa = {user_id: await SecureStore.getItemAsync('userId')}

        const response = await axios.post('https://joulz-vite-app-backend.onrender.com/api/get_user_cart' , userDataa)
                       
                          console.log(response)
                          setFormData(response.data.cart)
                     
                         }catch(error){

                            console.log(error)
                         }


   }  
 fetchData();
},[]);



 const handleSubmit = async() => {
             //    e.preventDefault();
 const dataa = {
    "fullname":fullname,
    "address":address,
    "state":state
  }
const user_id =  await SecureStore.getItemAsync('userId');
              
       
    const _data = {dataa, user_id}
            


  
    
 const response = await axios.post("https://joulz-vite-app-backend.onrender.com/check/check_out", _data)
  .then((response)=>{

         console.log(response);
           console.log(response.data.clientOrder._id);
     const orderId = response.data.clientOrder._id;
                  
                 const id: string =  orderId;

                     router.replace(`/orderConfirmation/${id}`);
                  })
                  .catch((error)=>{
                   
                     console.log(error)
                  })
 
  }



   return (
             <View  style = {styles.container} >
                <ScrollView>

<View  style = {styles.box1}>
 <Text>Delivery Details</Text>
  <TextInput 
     placeholder='enter fullname'
    onChangeText={setFullname} 
     value={fullname}
     style={{color:"black",
                     backgroundColor:"lightgrey",
                      borderWidth:1.5,borderColor:"black",
                      marginBottom:40}}/>
                     
     <TextInput 
     placeholder='enter address'  
     onChangeText={setAddress} 
     value={address}
     style={{color:"black",
                     backgroundColor:"lightgrey",
                      borderWidth:1.5,borderColor:"black",
                      marginBottom:40}}/>
                       
                    <TextInput 
     placeholder='enter state'  
     onChangeText={setState} 
     value={state}
     style={{color:"black",
                     backgroundColor:"lightgrey",
                      borderWidth:1.5,borderColor:"black",
                      marginBottom:40}}/>    
 
     <TouchableOpacity
             style={styles.portfolioButton}
                            
         onPress={handleSubmit}
         ><Text style={styles.portfolioText}>Make Order</Text></TouchableOpacity>
            
</View>
 {
                    
 formData.map((item)=>(

                    
 
  <View  key = {item._id}  style = {styles.box2}>
     <Image source={{ uri: item.productId?.image, cache: 'reload' }}
                                  style={styles.productImage}
                                         onError={(error) => console.log('Image load error for', item._id, ':', error.nativeEvent.error)}
                                  
                                            />
 <Text style = {styles.portfolioText1}>{item.productId.title}</Text>
  <Text style = {styles.portfolioText2}>${item.productId.price}</Text>
    <Text style = {styles.portfolioText3}>{item.quantity}</Text>
            
</View>

                    )


                   )
                }

           
             


</ScrollView>
             </View>




   )


}


const styles = StyleSheet.create({
         container:{
          flex:1,
          backgroundColor:"white",
         
         
        
         },


          box1:{
         height:300,
         marginBottom:70,
         marginTop:30,
          backgroundColor:"white",
          width:screenWidth * 0.8,
         //           borderColor:"red",
         //  borderWidth:2,
          alignSelf:"center"
          
          },

           box2:{
           height:65,
          backgroundColor:"white",
          width:screenWidth * 1.0,
          flexDirection:"row",
         //       borderColor:"red",
         //  borderWidth:2
         },

          portfolioText:{
        
          fontSize:19,
          paddingTop:50,
          height:30,
          color:"black",
          fontWeight:"normal",
          alignSelf:"center"
           },

           productImage:{ 
          width:45,
          height:50,
          marginRight:20,
          marginLeft:20
        },

 portfolioText1:{
        
           fontFamily:"EBGaramondRegular",
          fontSize:17,
     
          height:60,
          color:"black",
          fontWeight:"bold",
          paddingLeft:20,

           },

         

        portfolioText2:{
          paddingLeft:20,
          fontFamily:"EBGaramondRegular",
          fontSize:17,
      
          height:60,
          color:"black",
          fontWeight:"bold"
           },


            portfolioText3:{
          paddingLeft:20,
          fontFamily:"EBGaramondRegular",
          fontSize:17,
      
          height:60,
          color:"black",
          fontWeight:"bold"
           },

          
           portfolioButton:{
        
          fontSize:47,
          width:125,
          height:30,
          color:"black",
          fontWeight:"condensedBold",
          alignSelf:"flex-start",
          borderColor:"black",
          borderWidth:2
           },


          
})