import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import LightTheme from "@/utility/LightTheme";
import { ThemeProvider } from "@react-navigation/native";
import { Appearance, useColorScheme } from 'react-native';
import DarkTheme from "@/utility/DarkTheme";
import React, { useMemo, useState } from "react";




export default function RootLayout() {
  const [isDarkTheme, setIsDarkTheme] = useState(useColorScheme() === 'dark')  
  Appearance.addChangeListener(() => { setIsDarkTheme(Appearance.getColorScheme() === 'dark')})

  return (
    <>
    <ThemeProvider
        value={isDarkTheme
        ? DarkTheme
        : LightTheme
       }
      >
      <StatusBar></StatusBar>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      </ThemeProvider>

    </>
  );
}
