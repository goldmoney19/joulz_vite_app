import axios from "axios";
import { router } from 'expo-router';
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';





export default function Register() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



       const handleSubmit  = async() => {
                //    e.preventDefault();
  
 
  const formData = {
    "email":email,
    "password":password
  }

// console.log(formData);

//                     const portf = {email , password}
                   
                   await axios.post("https://joulz-vite-app-backend.onrender.com/api/user", formData)
                  .then((response)=>{
                     console.log("user inserted");
                    console.log(response.data.message, {position:"top-right"});
                     router.replace("/login")
                  })
                  .catch((error)=>{
        //    toast.error('Inputs cannot be empty', {position:"top-right"});

                     console.log(error)
                  })

          


    }

    return(

        <View style={{flex:1,backgroundColor:"white"}}>
              {/* <ActivityIndicator color="black" size= "large" /> */}
              <ScrollView>
         
                     <TextInput 
                     placeholder='enter username'
                     onChangeText={setEmail} 
                      value={email}
                     style={{flex:1,color:"black",
                    backgroundColor:"yellow",
                     borderWidth:2,borderColor:"red"}}/>
                    
                     <TextInput 
                     placeholder='enter password'  
                      onChangeText={setPassword} 
                      value={password}
                      style={{flex:1,color:"white",
                      backgroundColor:"purple",
                      borderWidth:2,
                      borderColor:"red"}}/>
                      
                      

                       <TouchableOpacity
                             style={styles.portfolioButton}
                           
                            onPress={handleSubmit}
                            ><Text style={styles.portfolioText}>Register</Text></TouchableOpacity>
                   
                                 <View >
                            
                               <TouchableOpacity
                             style={styles.portfolioButton}
                           
                             onPress={() => router.push('/login')}
                            ><Text style={styles.portfolioText}>Login</Text></TouchableOpacity>
                            </View>
                                      
                    
                   
          
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
        }
      })