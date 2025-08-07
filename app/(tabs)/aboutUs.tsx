import Footer from '@/components/Footer';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import splash from '../../assets/images/uju2.jpg';

const { width: screenWidth } = Dimensions.get('window');


export default function about() {
  

    return(

        <View style={styles.container}>
           <ScrollView>

             <Text style={styles.message}>Founder's Message</Text>

           <Image source={splash} style = {styles.image} />
           
               <Text style={styles.aboutText}>“Design is not just about creating beautiful spaces; it’s
                 about telling a story, evoking emotion, and enhancing the way 
                 people live and work. At Joulz Interiors, we take pride in 
                 bringing visions to life, infusing each project with passion,
                  precision, and a touch of timeless luxury. Every client is 
                  unique, and our mission is to craft interiors that celebrate 
                  their personality while delivering the highest standards of 
                  quality and sophistication.”</Text>

  <View style={styles.storyCover}>

      <Text style={styles.storyText}>Our Story</Text>
     <Text style={styles.storyText2}>Joulz Interiors was born out of a passion for exquisite spaces 
          and the desire to bring world-class luxury design to homes and 
          businesses in Nigeria and beyond. What started as a love for 
           transforming interiors has grown into a full-fledged design firm 
           recognized for its creativity, attention to detail, and refined 
           aesthetic. Our design philosophy is rooted in the belief that spaces 
           should not only be beautiful but also meaningful and functional.
           Whether it’s a modern penthouse, a stylish office, or a luxurious 
           hotel, we curate every element to reflect elegance, comfort, and 
           individuality.</Text>
                         
                         
                        
            
           </View>
               <View style = {styles.footer}>
                          <Footer />
                         </View>

              </ScrollView>
           </View>

          
    )
}

const styles = StyleSheet.create({
         container:{flex:1,
          backgroundColor:"white",
          
          height:160,
          alignItems:"center",
          // flexDirection:"row",
          // justifyContent:"space-evenly",
         
        },

        message:{ 
          paddingTop:30,
         textAlign:"center",
         fontWeight:"bold",
          fontSize:20,
          fontFamily:"EBGaramondRegular",
         
          // alignSelf:"flex-end"
        },

         image:{
                alignSelf:"center",
          marginTop:40,
            width:screenWidth * 0.9,
        height:300

           },

           aboutText:{
            textAlign:"center",
          fontSize:17,
          marginTop:40,
          fontFamily:"EBGaramondRegular",
          padding:15
        
        },

         storyCover:{
            textAlign:"center",
          fontSize:17,
          marginTop:40,
          fontFamily:"EBGaramondRegular",
          padding:15,
          backgroundColor:"black",
          color:"white"
        
        },

        storyText:{
       color:"white",
        textAlign:"center",
        fontFamily:"EBGaramondRegular",
      fontSize:17,
        },

         storyText2:{
          paddingTop:30,
       color:"white",
        textAlign:"center",
        fontFamily:"EBGaramondRegular",
      fontSize:17,
        },
     
        footer:{
          marginTop:40,
         
        
        },


        })
          

         
         
         

