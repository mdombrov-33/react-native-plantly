import { View, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { useUserStore } from '@/store/userStore';
import { PlantlyButton } from '@/components/PlantlyButton';

export default function ProfileScreen() {
  const toggleHasOnBoarded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnBoarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colorWhite
  }
});
