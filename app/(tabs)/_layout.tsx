import { Tabs } from 'expo-router';
import React from 'react';
import TabBar from '@/components/TabBar';


export default function TabLayout() {
  return (
    <Tabs 
    tabBar={props => <TabBar {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: 'white', //TODO to change
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