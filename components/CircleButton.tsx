import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from 'react-native';
import { useTheme } from '@react-navigation/native';
import ColorPanel from '@/utility/ColorPanel';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  const {colors} = useTheme();
  const color = useColorScheme();
  const theme = ColorPanel.Theme(color === 'dark')

  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={[styles.circleButton, theme.shadow , {backgroundColor : theme.b_a1}]} onPress={onPress}>
        <MaterialIcons name="add" size={38} color={colors.primary} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
  },
});
