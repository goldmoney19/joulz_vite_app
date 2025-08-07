import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import React from 'react';
const { width: screenWidth } = Dimensions.get('window');





export default function WhatWeOffer() {


  const dataPro =[ 
    {id:1, 
    title:"lekki apartment",
    source:require('../assets/images/interior3.jpg')},
   
    {id:2, 
    title:"omaricode",
    Image:"Quickly grab your favorite online videos and music with",
    source:require('../assets/images/winery3.jpg')},

    {id:3, 
    title:"swedish apartment",
    Image:"Quickly grab your favorite online videos and music with",
     source:require('../assets/images/sofa1.jpeg')}

  ]

  

    return(

        <View style={styles.container}>
          
  {/* <ActivityIndicator color="black" size= "large" /> */}
     {/* <StatusBar backgroundColor="brown" barStyle = "light-content" /> */}
 
     {
             
         dataPro.map(item => 
             {
                  console.log(item.id);
                 return(
                            
     

                                                    
   <View style = {styles.portfolioCover} key = {item.id}>
                             
     <Image  style = {styles.portfolioImage} source={item.source}  />

  <Text  style = {styles.portfolioTitle}>{item.title}</Text>
                              
                            
  </View>
                            
                          )
                       
                        }
                  )

                  // <FlatList  data={dataPro}  renderItem={({item})=>{
                  //                console.log(item.id);
                  //    return(
                  //           <View style = {styles.portfolioCover} key = {item.id}>
                             
                             
                  //             <View><Text  style = {styles.portfolioTitle}>{item.title}</Text></View>
                  //              <View><Text  style = {styles.portfolioDisc}>{item.description}</Text></View>
                            
                  //             </View>
                            
                  //         )
                  // }}/>
                }
       
 {/* <Pressable onPress={() => {alert('ok na')}}>
    <Image source={{ uri: 'https://picsum.photos/300' }} style={styles.portfolioImgg} />
    </Pressable> */}
          
          
           </View>
    )
}

const styles = StyleSheet.create({
         container:{
          backgroundColor:"white",
          // borderWidth:2,
          // borderColor:"blue",
          minHeight:200,
           flexWrap:"wrap",
          justifyContent:"space-around",
          margin:20

       
          
         },

        portfolioCover:{
          marginBottom:150,
          //  borderWidth:2,
          // borderColor:"green",
          width: screenWidth * 0.9,
          height:120,
          color:"blue",

             
          
        },

         portfolioTitle:{
          fontSize:17, 
          textAlign:"center",
        fontFamily:"EBGaramondRegular"
        },
         portfolioImage:{height:200, width:"100%"},
        //  portfolioImgg:{width:100, height:100,marginTop:20,flexWrap:"wrap"}
         

})