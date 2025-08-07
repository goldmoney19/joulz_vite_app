import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import 'react-native-reanimated';
import { AuthProvider } from '../context/AuthContext';

import { useColorScheme } from '@/hooks/useColorScheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    EBGaramondRegular: require('../assets/fonts/EBGaramond-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <AuthProvider>
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
     {/* <Stack.Screen name="ProductDetails/[id]" options={{ headerShown: true, title: "Product Details" }} /> */}

        <Stack.Screen name="+not-found" />
      </Stack>
      {/* <StatusBar style="light" /> */}
    </ThemeProvider>
    </AuthProvider>
  );
}
