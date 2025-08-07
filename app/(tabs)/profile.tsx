import { router } from 'expo-router';
import { useRef } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useAuth } from '../../context/AuthContext';



export default function profile() {
       const { isLoggedIn, logout } = useAuth();
         const hasNavigated = useRef(false);

  

  // useEffect(() => {
  //   if (!isLoggedIn && !hasNavigated.current) {
  //           hasNavigated.current = true;

  //   setTimeout(() => {
  //   router.replace('/login');
  // }, 100);
      
  //   }
  // }, [isLoggedIn]);

    const handleLogout = async() => {

       
  
       logout(); 
    

     }

 if (!isLoggedIn) {
    
setTimeout(() => {
        router.replace('/');
      }, 100)

   }


    return(
     <View  style = {styles.container} >
        
        <Text>profile</Text>
     
      
                           <TouchableOpacity
                                  style={styles.portfolioButton}
                                 
                                  onPress={() => handleLogout()} // Pass the product ID
                                ><Text style={styles.logoutText}>Logout</Text></TouchableOpacity>
                                
                                </View>


    )
}

const styles = StyleSheet.create({
         container:{
          flex:1,
          backgroundColor:"white",
         
         
        
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

         logoutText:{
          fontSize:15,
         
        
            borderColor:"black",
            borderRadius:8,
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
        }


        })