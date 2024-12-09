import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import ColorPanel from '@/utility/ColorPanel';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  const {colors} = useTheme();
  const color = useColorScheme();
  const theme = ColorPanel.Theme(color === 'dark')

  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={theme.text}/>
      <Text style={[styles.iconButtonLabel, {color : theme.text}]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    marginTop: 12,
  },
});
