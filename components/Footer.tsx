import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  

    return(

        <View style={styles.container}>
            <View style = {styles.boxview}>
             <Text style = {styles.box3Text1}>Get in touch</Text >
               <Text style = {styles.box3Text2}>Tel: +234 08033500421</Text>
               <Text style = {styles.box3Text3}>Website: www.tinyurl/intjoulz</Text>
             </View>

               <View style = {styles.box3view}>
               
                <Text style = {styles.box3Text1}>Address</Text >
               <Text style = {styles.box3Text2}>Joulz Interior Limited, No. 14 Admiralty Road Adeola Odeku</Text>
               <Text style = {styles.box3Text3}>Company Number | 54566676</Text>

               </View>

                <View style = {styles.box4view}> 
               
                <Text style = {styles.box3Text1}>Copyright</Text >
               <Text  style = {styles.box3Text2}>2025 | Joulz Interior all rights reserved</Text>
             
               </View>
           </View>
    )
}

const styles = StyleSheet.create({
         container:{flex:1,
          backgroundColor:"rgba(92, 146, 146, 0.4)",
         
          height:160,
          alignItems:"center",
          
          // flexDirection:"row",
          // justifyContent:"space-evenly",
         
        },

         box1:{width:120,
          
          height:40,
          color:"black",
           borderWidth:2,
          borderColor:"red",
          fontSize:24,
          fontWeight:"bold",
          backgroundColor:"brown",
          alignSelf:"flex-start",
         left:100,
         top:40
        },
          

         box2:{width:120,
          height:40, 
          borderWidth:2,
          borderColor:"green",
          fontSize:24,
          fontWeight:"bold",
          backgroundColor:"green",
          alignSelf:"flex-end"},

          boxview:{
          textAlign:"center",
          marginTop:20
       
          },
         
             box3view:{
          textAlign:"center",
          marginTop:30
       
          },


            box3Text1:{
          textAlign:"center",
         fontSize:17,
         fontWeight:"bold",
        fontFamily:"EBGaramondRegular",
           paddingBottom:10,
          },

            box3Text2:{
          textAlign:"center",
         fontSize:17,
    fontFamily:"EBGaramondRegular",
         },

            box3Text3:{
          textAlign:"center",
          fontSize:17,
           fontFamily:"EBGaramondRegular",
         },

         box4view:{
          textAlign:"center",
          marginTop:50
       
          },



})