import React, { useCallback, useRef, useState } from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const carouselData = [
  { id: '1',
    textOne:"Joulz Interiors",
    textTwo:"Specialist in Bespoke, Kitchens",
    image: 'https://picsum.photos/300' },

  { id: '2',
     textOne:"Joulz Interiors",
    textTwo:"Specialist in Bespoke, Kitchens",
    image: 'https://picsum.photos/id/102/600/400?cache_bust=2' },

  { id: '3',
     textOne:"Joulz Interiors",
    textTwo:"Specialist in Bespoke, Kitchens",
    image: 'https://picsum.photos/id/103/600/400?cache_bust=3' },
];

export default function AutoScrollingCarousel() {
  const flatListRef = useRef<FlatList<typeof carouselData[0]>>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [search, setSearch] = useState("");

  const AUTO_SCROLL_INTERVAL = 3700;

  // Log when component mounts to verify FlatList ref
  React.useEffect(() => {
    console.log('FlatList ref mounted:', flatListRef.current);
  }, []);

  // Handle dot press with detailed logging
  const handleDotPress = useCallback(
    (index: number) => {
      console.log('Dot pressed, scrolling to index:', index, 'flatListRef:', flatListRef.current);
      if (flatListRef.current) {
        try {
          flatListRef.current.scrollToIndex({ index, animated: true });
          setActiveIndex(index);
        } catch (error) {
          console.log('scrollToIndex error:', error);
        }
      } else {
        console.log('FlatList ref is not available');
      }
    },
    []
  );

  const scrollNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % carouselData.length;
    if (flatListRef.current) {
      try {
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
        setActiveIndex(nextIndex);
      } catch (error) {
        console.log('scrollToIndex error:', error);
      }
    } else {
      console.log('FlatList ref is not available');
    }
  }, [activeIndex, carouselData.length]);

   ///Commented out for testing manual interactions
  // useEffect(() => {
  //   const interval = setInterval(scrollNext, AUTO_SCROLL_INTERVAL);
  //   return () => clearInterval(interval);
  // }, [scrollNext]);

  // Handle viewable items changed for manual swiping
  // const onViewableItemsChanged = useCallback(
  //   ({ viewableItems }: { viewableItems: Array<{ index: number | null; isViewable: boolean }> }) => {
  //     if (viewableItems.length > 0 && viewableItems[0].index !== null) {
  //       console.log('Viewable item changed to index:', viewableItems[0].index);
  //       setActiveIndex(viewableItems[0].index);
  //     }
  //   },
  //   []
  // );

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  // Define getItemLayout for precise scrolling
  const getItemLayout = useCallback(
    (_: any, index: number) => {
      const layout = {
        length: screenWidth,
        offset: screenWidth * index,
        index,
      };
      console.log('getItemLayout for index:', index, 'layout:', layout);
      return layout;
    },
    []
  );

  // Render each carousel item with debug info
  const renderItem = useCallback(({ item }: { item: typeof carouselData[0] }) => {
    console.log('Rendering item:', item.id, item.image);
    return (
      // <View style={[styles.carouselItem, { backgroundColor: item.id === '1' ? 'red' : item.id === '2' ? 'blue' : 'green' }]}>
       <View style={[styles.carouselItem]}>
      <View>
        <Image
          source={{ uri: item.image, cache: 'reload' }} // Force reload to avoid caching
          style={styles.image}
          onError={(error) => console.log('Image load error for', item.id, ':', error.nativeEvent.error)}
        />
         <View style={styles.dimOverlay} />
        <Text style={styles.imageOverlayTextOne}>{`${item.textOne}`}</Text>
          <Text style={styles.imageOverlayTextTwo}>{`${item.textTwo}`}</Text>
         
         <TouchableOpacity style={styles.customButton} onPress={() => alert('Custom button pressed!')}>
  <Text style={styles.buttonText}>shop</Text>
</TouchableOpacity>
 <TouchableOpacity style={styles.customButtonTwo} onPress={() => console.log('Custom button pressed!')}>
  <Text style={styles.buttonTextTwo}>portfolio</Text>
</TouchableOpacity>

          </View>        
      </View>
    );
  }, []);

  return (
    <View style={styles.container}>

      {/* <View style={styles.cover}>
      <TextInput   placeholder='Search'  
      placeholderTextColor="black"
                      onChangeText={setSearch} 
                      value={search}
                      style={{
                        paddingLeft:10,
                        color:"blaok",
                       backgroundColor:"white",
                      borderWidth:1,
                      borderColor:"black",
                      borderRadius:30,
                    marginTop:10,
                    width:"60%",
                    alignSelf:"center",
                    height:23,
                    fontSize:12
                  }}
                      />

                        <TouchableOpacity
                  style={styles.portfolioButton}
                                                  
                 onPress={() => alert("happy search")} // Pass the product ID
               ><Text style={styles.portfolioText}>search</Text></TouchableOpacity>

</View> */}

      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        // onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
        getItemLayout={getItemLayout}
        initialScrollIndex={0}
      />
      <View style={styles.pagination}>
        {carouselData.map((_, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.dot, activeIndex === index ? styles.activeDot : styles.inactiveDot]}
            onPress={() => handleDotPress(index)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  
  },

    cover: {
    justifyContent:"space-around",
 flexDirection:"row",
 marginBottom:3
  },

   dimOverlay: {
    ...StyleSheet.absoluteFillObject, // Covers the entire parent
    backgroundColor: 'black',
    opacity: 0.8, // 40% dimming
  },

  
  //   btnnCover: {
  //   borderColor:"red",
  //   borderWidth:2
  // },
  carouselItem: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
     borderRadius: 35,
    
     marginTop:0
    
    
  },
  image: {
    
    width: screenWidth * 1.0,
    height: screenWidth * 1.35,
   resizeMode: 'cover',
    
  },
  imageOverlayTextOne: {
    position: 'absolute',
    top: 120,
     alignSelf:"center",
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 5,
     fontFamily: "EBGaramondRegular",
     },
     
  imageOverlayTextTwo: {
    position: 'absolute',
    top: 150,
   alignSelf:"center",
     padding: 15,
     fontFamily:"EBGaramondRegular",
    color: 'white',
    fontSize: 19,
    fontWeight: 'normal',
    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
   
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#007bff',
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },


  
  customButton: {
    backgroundColor: 'rgba(0,0,0,0.0)', // Blue background
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
    top: 220,
   alignSelf:"center",
    height:45
   
  },
  buttonText: {
    color: 'white', // White text
    fontSize: 14,
    fontWeight: 'normal',
    fontFamily:"EBGaramondRegular",
    // fontFamily: 'YourCustomFont-Medium', // Apply custom font if loaded
  },



   customButtonTwo: {
    backgroundColor: 'rgba(0,0,0,0.0)', // Blue background
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
    top: 270,
    alignSelf:"center",
     borderWidth:1.5,
    borderColor:"white",
    height:45
  },
  buttonTextTwo: {
    color: 'white', // White text
    fontSize: 14,
    fontWeight: 'normal',
     fontFamily:"EBGaramondRegular",
    // fontFamily: 'YourCustomFont-Medium', // Apply custom font if loaded
  },

   portfolioButton:{
          fontSize:15,
          width:80,
          height:30,
          marginBottom:1,
            borderWidth:2,
            borderColor:"black",
            borderRadius:29,
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular",
           alignSelf:"flex-end",

        },

         portfolioText:{
          fontSize:15,
         
        
            borderColor:"black",
            borderRadius:8,
            backgroundColor:"black",
            color:"white",
            textAlign:"center",
          fontFamily:"EBGaramondRegular"
        }

});