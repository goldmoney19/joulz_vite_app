import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import splash from '../assets/images/interior3.jpg';


const { width: screenWidth } = Dimensions.get('window');




export default function AboutDisplay() {
  
  const [isModalVisible, setIsModalVisible] = useState(false)

    return(

        <View style={styles.container}>
              {/* <ActivityIndicator color="black" size= "large" /> */}
             
 <View style={styles.aboutCover}>
       {/* <Text style={styles.aboutTitle}>About Us</Text> */}
         <Image source={splash} style={styles.aboutImgg} /> 
        <Text style={styles.aboutDisc}>The positional $ operator cannot be used
               for queries 
              which traverse more than one array, such as queries that traverse 
              arrays nested within other arrays, because the replacement for the 
              $ placeholder is a single value
              which traverse more than one array, such as queries that traverse 
              arrays nested within other arrays, because the replacement for the 
              $ placeholder is a single value
              </Text>
             
</View>

       <TouchableOpacity style={styles.customButtonTwo} onPress={() => console.log('Custom button pressed!')}>
        <Text style={styles.buttonTextTwo}>More</Text>
      </TouchableOpacity>
     
      {/* <View>
             <Button title='More' onPress = {() => {setIsModalVisible(true)}}
              color = "blue"
             
                  />
          </View> */}
           
             {/* <Modal visible = {isModalVisible} animationType = "fade"
      onRequestClose = {()=>{setIsModalVisible(false)}}
    >
     <View style={styles.aboutModalContainer}>
      <Text>From trending YouTube videos and popular shows to can't-miss sports highlights, SaveFrom.Net 
handles it all. Just copy the URL of the video you want, paste it into our download box, and
 click Download ding</Text>
      <Button title='close modal' color ='brown'
      onPress = {() => {setIsModalVisible(false)}}
      />
     </View>

    </Modal> */}
           </View>
    )


}

const styles = StyleSheet.create({
 container:{
     backgroundColor:"white",
 //       borderWidth:2,
 //       borderColor:"red",
         marginTop:30,
         marginBottom:120
 },
 aboutCover:{
  justifyContent: 'center', 
    alignItems: 'center',  },
 aboutTitle:{
       paddingTop:0,
        fontSize:80
       },
 aboutImgg:{
       width:screenWidth * 0.9,
        height:300
       },
aboutModalContainer:{
  backgroundColor:"yellow"},
aboutDisc:{fontSize:17,
  textAlign:"center",
   padding:15,
  fontFamily:"EBGaramondRegular",
},


 customButtonTwo: {
    backgroundColor: 'rgba(0,0,0,0)', // Blue background
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8, // Rounded corners
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center', // Center text vertically
    marginTop: 20,
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Android shadow
     position: 'absolute',
    top: 490,
     left: '20%', width: '60%', textAlign: 'center',
     borderWidth:1.5,
    borderColor:"black",
    height:36,
   
  },
  buttonTextTwo: {
    color: 'black', // White text
    fontSize: 18,
    fontWeight: 'normal',
    // fontFamily: 'YourCustomFont-Medium', // Apply custom font if loaded
  },
        
})