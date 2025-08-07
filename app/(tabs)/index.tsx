import AboutDisplay from '@/components/AboutDisplay';
// import UserCart from '@/components/UserCart';
import Karuzel from '@/components/AutoScrollingCarousel';
import Footer from '@/components/Footer';
import PortfolioDisplay from '@/components/PortfolioDisplay';
import ShopDisplay from '@/components/ShopDisplay';
import WhatWeOffer from '@/components/WhatWeOffer';
import 'expo-dev-client';
import React, { useState } from 'react';





// import { useNavigation } from '@react-navigation/native';
import { ScrollView, StyleSheet, Text, View } from 'react-native';



export default function Home() {

// const navigation = useNavigation();
    const [userEmail, setUserEmail] = useState("");
    

  
  return(
    <View style={styles.container}>
                     {/* <View><Text style = {styles.portGreet}>{userEmail}</Text></View> */}

      <ScrollView>

           <Karuzel />
             <View><Text style = {styles.portText}>Portfolio</Text></View>
          <PortfolioDisplay /> 
           <Text style={styles.abuttText}>About Us</Text>
          <AboutDisplay /> 
           <View><Text style = {styles.portText}>Shop</Text></View>
          <ShopDisplay />
          <View><Text style = {styles.portOffer}>What we offer</Text></View>
          
          <WhatWeOffer />
           <Footer />
          {/* <UserCart /> */}
          {/* <Button title='About3'
          onPress = {() =>   router.push('/about')}
          /> */}
    </ScrollView>
  </View>

  )
}

const styles = StyleSheet.create({
         container:{flex:1,
          backgroundColor:"white",
          // borderWidth:2,
          // borderColor:"yellow",
          textAlign:"center",
          
          
         },

           portGreet:{
          paddingTop:25,
          fontSize:23,
          textAlign:"center",
          fontFamily:"EBGaramondRegular",
          fontWeight:"bold",
          color:"red"

         
       
        },

         portText:{
          paddingTop:50,
          fontSize:24,
          textAlign:"center",
          fontFamily:"EBGaramondRegular",
       
        },

          abuttText:{
            paddingTop:50,
          fontSize:24,
          textAlign:"center",
          fontFamily:"EBGaramondRegular"
         },
        
         portOffer:{
          paddingTop:50,
          fontSize:24,
          textAlign:"center",
            fontFamily:"EBGaramondRegular",
        }
})

// const styles = StyleSheet.create({
//   titleContainer: {
//     flex:1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//     backgroundColor:"red",
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
