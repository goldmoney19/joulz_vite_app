import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
 <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
         <Tabs>
        <Tabs.Screen name="index" options={{title:"Home",
        headerStyle:{backgroundColor:"black"},
         headerShown: false,
          // --- Tab Bar Styling ---
          // Color for the active (selected) tab's label and icon
          tabBarActiveTintColor: 'white',
          // Color for inactive tabs' labels and icons
          // Set this to black too if you want them equally prominent,
          // or a slightly lighter shade of black/dark grey if you want a subtle difference.
          tabBarInactiveTintColor: 'black', // Changed from 'gray' to 'black'

          // Style for the entire tab bar container
          tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },

          // Style for the text labels of the tabs
          tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           // color: 'white',
          },
         }}/>

         
   

        <Tabs.Screen name="aboutUs" options={{ title:"About us" ,
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                     tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },

            tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           color: 'white',
          },

        }}/>

        <Tabs.Screen name="login" options={{ title:"Login",
         tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                     tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },
          tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           color: 'white',
          },
        
          
        }}/>
        <Tabs.Screen name="Register" options={{ title:"Register", 
        tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
           tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },
          tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           color: 'white',
          },
          
         }}/>

       <Tabs.Screen name="UserCart" options={{ title:"Cart" ,
         tabBarInactiveTintColor: 'white',
                     tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },
           tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           color: 'white',
          },
       }}/>

        <Tabs.Screen name="profile" options={{ title:"Profile" ,
         tabBarInactiveTintColor: 'white',
                     tabBarStyle: {
            backgroundColor: 'black', // Set tab bar background to white
            borderTopWidth: 0, // Optional: Removes the thin line at the top of the tab bar
            elevation: 0,      // Optional: Removes shadow on Android
            shadowOpacity: 0,  // Optional: Removes shadow on iOS
          },
           tabBarLabelStyle: {
            fontSize: 12,        // Adjust font size as needed
            fontWeight: 'bold',  // Make the text bold
            // You can also explicitly set color here, though active/inactive tint usually handles it
           color: 'white',
          },
       }}/>
      </Tabs>
      {/* <StatusBar style="auto" /> */}
    </ThemeProvider>
    
  );
}
