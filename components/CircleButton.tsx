import { View, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useColorScheme } from 'react-native';
import CustomTheme from '@/utility/CustomTheme';

type Props = {
  onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
  const colorScheme = useColorScheme();
  const sColor = colorScheme==='light' ? CustomTheme.lightStyles :  CustomTheme.darkStyles

  return (
    <View style={styles.circleButtonContainer}>
      <Pressable style={[styles.circleButton, sColor.shadow]} onPress={onPress}>
        <MaterialIcons name="add" size={38} color={sColor.p2} />
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
    backgroundColor: '#ffff',
  },
});
