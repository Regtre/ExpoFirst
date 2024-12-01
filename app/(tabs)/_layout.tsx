import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (
    <Tabs 
    screenOptions={{
      tabBarActiveTintColor: '#90E0EF',
      headerStyle: {
        backgroundColor: '#000122',
      },
      headerShadowVisible: false,
      headerTintColor: '#90E0EF',
      tabBarStyle: {
      backgroundColor: '#000122',
      },
    }}
    >
      <Tabs.Screen name="index" options={{ 
        title: 'Home',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} 
          color={color} size={20} />
        ),
       }} />
      <Tabs.Screen name="about" options={{ title: 'About',
         tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} 
          color={color} size={20} />
        ),
       }} />
    </Tabs>
  );
}