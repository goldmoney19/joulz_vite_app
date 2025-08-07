import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import axios from "axios";
import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';


export default function ShopDisplay() {

           interface Product{
                  _id:string;
              title:string;
              smallDescription:string;
              image:string;
              price:number;
                             
            }
  
      // const token = cookies.get("access-token");

   const [products, setProducts] =  useState<Product[]>([]);
           const [isLoading, setIsLoading] = useState(true);


                     useEffect(()=>{
                        const fetchData = async() => {
        
                        try{
                 const response = await axios.get("https://joulz-vite-app-backend.onrender.com/shops/shops" );
                //  console.log(response);
                  setProducts(response.data);
         
                           }
                     catch (error) {
             console.log("eshop no gree fetch", error) 
            }finally{

            setIsLoading(false);
         }
        
                        }
        
        fetchData();
                     },[]);

   const handleProductPress = (productId: string) => {
    // Navigate to the dynamic product details page
    // The path should match your file structure: app/product/[id].tsx
    router.push(`/ProductDetails/${productId}`); 
  };


    if (isLoading) {
    return <ActivityIndicator size="large" color="black" />;
  }
    return(

        <View style={styles.container}>
          
              {/* <ActivityIndicator color="black" size= "large" /> */}
              {/* <StatusBar backgroundColor="brown" barStyle = "light-content" /> */}
             
                {
             
                  products.map(item => 
                        {
                           console.log(item._id);
                          return(
                            
     

                            
         <View style = {styles.portfolioCover} key = {item._id}>
            <TouchableOpacity
          style={styles.portfolioCover}
          key={item._id}
          onPress={() => handleProductPress(item._id)} // Pass the product ID
        >
          <Image source={{ uri: item.image, cache: 'reload' }}
           style={styles.productImage}
       onError={(error) => console.log('Image load error for', item._id, ':', error.nativeEvent.error)}

          />

         <Text  style = {styles.portfolioTitle}>{item.title}</Text>

          <Text  style = {styles.portfolioTitle}>${item.price}</Text>
            <Text  style = {styles.portfolioDisc}>{item.smallDescription}</Text>
            </TouchableOpacity>
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
        //   borderWidth:2,
        //   borderColor:"blue",
          minHeight:200,
          
          flexDirection:"row",
          flexWrap:"wrap",
          justifyContent:"space-evenly",
          margin:20

       
          
         },

        portfolioCover:{
          marginBottom:110,
        
          width:125,
          height:120,
          color:"blue",

             
          
        },

         productImage:{ 
          width:125,
          height:120
        },

         portfolioTitle:{fontSize:12},
         portfolioDisc:{fontSize:13},
        //  portfolioImgg:{width:100, height:100,marginTop:20,flexWrap:"wrap"}
         

})