import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';
import { useTheme } from '@react-navigation/native';


export default function TabLayout() {
  const {colors} = useTheme() ;
  return (
    <Tabs 
    tabBar={props => <TabBar {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.background
      },
      headerShadowVisible: false,
    }}
    >
      <Tabs.Screen name="index" options={{ 
        title: 'Home'
       }} />
      <Tabs.Screen name="about" options={{ 
        title: 'About'
       }} />
    </Tabs>
  );
}