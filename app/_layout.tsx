import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import LightTheme from "@/utility/LightTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Appearance, Platform, useColorScheme } from 'react-native';
import DarkTheme from "@/utility/DarkTheme";
import React from "react";




export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isLight = colorScheme === 'light' ;
  const barStyle = isLight ? 'auto' : 'light'
  let theme = isLight ? LightTheme : DarkTheme

  React.useEffect(() => {
    const colorScheme = theme.dark ? 'dark' : 'light';
    theme = isLight ? LightTheme : DarkTheme
  
    if (Platform.OS === 'web') {
      document.documentElement.style.colorScheme = colorScheme;
    } else {
      Appearance.setColorScheme(colorScheme);
    }
  }, [theme.dark]);

  return (
    <>
    <ThemeProvider value={theme} >

      <StatusBar style={barStyle}></StatusBar>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </ThemeProvider>

    </>
  );
}
