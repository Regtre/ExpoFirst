import { StyleSheet } from 'react-native';
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
         <Stack.Screen name="+not-found" />
  </Stack>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B4D8',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});
