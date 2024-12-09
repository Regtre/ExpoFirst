import { StyleSheet, View, Pressable, Text, useColorScheme } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@react-navigation/native";
import ColorPanel from "@/utility/ColorPanel";

type Props = {
  label: string;
  action: () => void;
  theme?: "primary";
};

export default function Button({ label, theme, action }: Props) {
  const { colors } = useTheme();
  const dark = useColorScheme();
  const color = ColorPanel.Theme(dark === 'dark')

  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer]}>
        <Pressable
          style={[styles.button, { backgroundColor: color.b_a1 }]}
          onPress={action}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color={color.text}
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: color.text }]}>
            {label}
          </Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={styles.button}
        onPress={action}
      >
        <Text style={{ color: color.text }}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    padding: 3,
  },
  button: {
    borderRadius: 30,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    fontSize: 16,
  },
});
