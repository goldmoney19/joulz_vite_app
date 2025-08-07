import axios from 'axios';
import { router, useLocalSearchParams } from 'expo-router';
import * as SecureStore from 'expo-secure-store'; // Import SecureStore
import { useEffect, useState } from 'react';
import { ActivityIndicator, Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';


const { width: screenWidth } = Dimensions.get('window');


export default function orderConfirmation() {

interface Order {
  _id: string;
  fullname: string;
  address: string;
  state: string; // Renamed from 'userState' to 'state' for clarity based on your Vite code
  items:{
     
productId:string;
title:string;
quantity:number;
price:number;
  } ;
  totalPrice: number;
  status: string; // e.g., 'pending', 'paid', 'shipped'
  createdAt: string; // Date string
  // Add any other fields your order object has

}

const { id } = useLocalSearchParams(); // Get the dynamic 'id' (orderId) from the URL
  const orderId = typeof id === 'string' ? id : Array.isArray(id) ? id[0] : undefined;
  console.log(orderId);
   const [order, setOrder] =  useState<Order[]>([]);
   const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [authorizationUrl, setAuthorizationUrl] = useState(null);


   useEffect(() => {
    if (orderId) {
      const fetchOrderDetails = async () => {
        try {
          setIsLoading(true);
          setError(null);
          // Assuming your backend has an endpoint like /api/orders/:id
          const response = await axios.get(`https://joulz-vite-app-backend.onrender.com/check/order/${orderId}`);
          setOrder(response.data); // Assuming response.data is the single order object
          console.log("Fetched order details:", response.data);
        } catch (err: any) {
          console.error("Error fetching order details:", err);
          if (axios.isAxiosError(err) && err.response) {
            setError(err.response.data.message || "Failed to load order details.");
          } else {
            setError("Network error or unexpected issue. Please try again.");
          }
        } finally {
          setIsLoading(false);
        }
      };
      fetchOrderDetails();
    } else {
      setIsLoading(false);
      setError("Order ID not provided.");
    }
  }, [orderId]); // Re-fetch if the orderId changes


   if (isLoading) {
    return (
      <View >
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading order details...</Text>
      </View>
    );
  }


  const handlePayment = async() =>{
try{
     const storedUserEmail = await SecureStore.getItemAsync('useEmail');
    
   const response = await axios.post('https://joulz-vite-app-backend.onrender.com/api/payment/initialize', {

        email:storedUserEmail,
        amount:order.totalPrice,
        orderId:order._id
});
    
console.log('payment response:',response.data);
     const {authorization_url} = response.data;
     if(!authorization_url){
      throw new Error('no authorizqtion_url in response');
     }
setAuthorizationUrl(authorization_url);
  }catch(error){

console.log(error);
  }
}


return(
    <View style = {styles.container}>
      <ScrollView>
<View>

        <Text  style = {styles.confirmHeaderText}>Your Order Has Been Placed Successfully!</Text>
        <Text style = {styles.confirmOrderId}>Order ID: {order._id}</Text>
        <Text style = {styles.confirmOrderId}>Status: {order.paymentStatus}</Text>
        <Text style = {styles.confirmOrderId}>Placed On: {new Date(order.createdAt).toLocaleDateString()}</Text>
   

    </View>

     <View>
        <Text style = {styles.confirmHeaderText}>Shipping Details</Text>
        <Text style = {styles.confirmOrderId}><Text>Name:</Text> {order.fullname}</Text>
        <Text style = {styles.confirmOrderId}><Text >Address:</Text> {order.address}</Text>
        <Text style = {styles.confirmOrderId}><Text >State:</Text> {order.state}</Text>
      </View>

       
         <View >
        <Text>Order Items</Text>

        {
        order.items.map((item) => (
          <View key={item._id} >
            {/* {item.image && (
              <Image source={{ uri: item.image }} style={styles.itemImage} resizeMode="cover" />
            )} */}
            <View >
              <Text style = {styles.confirmOrderId}>{item.title}</Text>
              <Text style = {styles.confirmOrderId}>${item.price.toFixed(2)} x {item.quantity}</Text>
              <Text style = {styles.confirmOrderId}>Subtotal: ${(item.price * item.quantity).toFixed(2)}</Text>
            </View>
          </View>
        ))}


          <TouchableOpacity
      style={styles.paystackButton}
    
     onPress={handlePayment} // Pass the product ID
   ><Text style={styles.portfolioText}>Pay with paystack</Text></TouchableOpacity>
      </View>

<View style={{ flex: 1 }}>
      {authorizationUrl ? (
         <View style={{ height: 600, marginTop: 20 }}>
        <WebView
          source={{ uri: authorizationUrl }}
          onNavigationStateChange={(navState) => {
            // Optional: Handle redirect URLs or payment success/failure
            console.log('WebView URL:', navState.url);
            if (navState.url.includes('success') || navState.url.includes('callback')) {

                      router.replace('/successScreen');

              // Handle payment success or callback
              // Example: Navigate back or update app state
            }
          }}
        />
        </View>
      ) : null}
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
        },

            confirmHeaderText:{
          fontSize:19,
          // borderColor:"black",
            // borderRadius:8,
            padding:13,
            color:"black",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
        },


        confirmOrderId:{
          fontSize:16,
          // borderColor:"black",
            // borderRadius:8,
            paddingLeft:13,
            color:"black",
           paddingTop:10,
          fontFamily:"EBGaramondRegular"
        },
         
        paystackButton:{
          fontSize:15,
          width:100,
          marginBottom:30,
            borderWidth:2,
            borderColor:"black",
            borderRadius:8,
            backgroundColor:"black",
            color:"white",
            alignSelf:"center",
          fontFamily:"EBGaramondRegular"
        },

}) 