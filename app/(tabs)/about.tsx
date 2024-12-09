import ColorPanel from "@/utility/ColorPanel";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function About() {
  const color = useColorScheme();
  const theme = ColorPanel.Theme(color === 'dark')
  
  return (
    <View style={styles.container} >
      <Text style={{color : theme.text}} >About page</Text>
      <Text style={{color : theme.text}} >Color is : {color}</Text>
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