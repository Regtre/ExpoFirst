import { Appearance, StyleSheet, Text, useColorScheme, View } from "react-native";

export default function About() {
  const color = useColorScheme()
  return (
    <View style={styles.container}>
      <Text>About page</Text>
      <Text>Color is : {color}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent : "center",
    alignItems : "center",
  }
})