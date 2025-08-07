import axios from "axios";
import { useRouter } from 'expo-router';
import * as SecureStore from 'expo-secure-store';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../context/AuthContext';


export default function Login() {

  const { login } = useAuth();
  const router = useRouter();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




       const handleSubmit  = async() => {
              

  try{

   const dataa = {
                    "email":email,
                    "password":password,
    }
 const response = await axios.post("https://joulz-vite-app-backend.onrender.com/authService/login", dataa)

     const {token, userId, useEmail, useRole} = response.data;

      if (token && userId) {


             SecureStore.setItemAsync('userToken', token);
         SecureStore.setItemAsync('userId', userId);
         SecureStore.setItemAsync('useEmail', useEmail);
         SecureStore.setItemAsync('useRole', useRole);

         login();

         setTimeout(() => {
        router.replace('/');
      }, 100)

           console.log('Login successful!');
        console.log('Token stored:', token);
        console.log('User ID stored:', userId);
        console.log('User Email stored:', useEmail);
        console.log('User Role stored:', useRole);

       

                
         }else{
          console.log("error");
         }
   

  }catch(error){
   
    console.log(error)

  }
      
   }
    

//    useEffect(() => {
//   const checkIfLoggedIn = async () => {
//     const token = await SecureStore.getItemAsync('userToken');
//     if (token) {
//       router.replace('/(tabs)/profile');
//     }
//   };

//   checkIfLoggedIn();
// }, []);

    return(

        <View style={{flex:1,backgroundColor:"white"}}>
              {/* <ActivityIndicator color="black" size= "large" /> */}
              <ScrollView>
         
                     <TextInput 
                     placeholder='enter username'
                     onChangeText={setEmail} 
                      value={email}
                     style={{flex:1,color:"black",
                    backgroundColor:"white",
                     borderWidth:2,borderColor:"red",
                     fontWeight:"bold"
                     }}/>
                    
                     <TextInput 
                     placeholder='enter password'  
                      onChangeText={setPassword} 
                      value={password}
                      style={{flex:1,color:"black",
                      backgroundColor:"white",
                      borderWidth:2,
                      borderColor:"red",
                                           fontWeight:"bold"

                      }}/>
                      
                     
                       <TouchableOpacity
       style={styles.portfolioButton}
     
       onPress={handleSubmit} 
      ><Text style={styles.portfolioText}>Login</Text></TouchableOpacity>
                      
                      
       
         {/* <TouchableOpacity
       style={styles.portfolioButton}
     
       onPress={() => router.push('/Register')}
      ><View><Text>Register</Text></View>
      
      </TouchableOpacity> */}
 
                    
                   
          
           </ScrollView>
           </View>
    )


}


const styles = StyleSheet.create({
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


        
      })