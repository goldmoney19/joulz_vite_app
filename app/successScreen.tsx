import { router } from "expo-router"
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function successScreen() {





    return(
    <View style= {styles.container}>
<Text  style= {styles.portfolioText}>Your Payment is successful an your order has been received for processing</Text>

<Button title = "continue shopping" 

/>

   <TouchableOpacity
             style={styles.portfolioButton}
                            
        onPress = {()=> {

    router.replace("/")
}}
         ><Text style={styles.portfolioText}>Continue Shopping</Text></TouchableOpacity>

    </View>

    )


}

const styles = StyleSheet.create({
         container:{
          flex:1,
          backgroundColor:"white",
         
         
        
         },

           portfolioText:{
          fontSize:20,
          paddingTop:30,
          paddingBottom:70,
            borderColor:"black",
          
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
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