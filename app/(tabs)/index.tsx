import { FlatList, StyleSheet } from 'react-native';
import { theme } from '../../theme';
import { usePlantStore } from '@/store/plantsStore';
import { PlantCard } from '@/components/PlantCard';
import { PlantlyButton } from '@/components/PlantlyButton';
import { useRouter } from 'expo-router';

export default function App() {
  const plants = usePlantStore((state) => state.plants);
  const router = useRouter();

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer} //* always use this when need to add padding or similar to scrollable
      data={plants}
      renderItem={({ item }) => <PlantCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton title="Add Plant" onPress={() => router.navigate('/')} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite
  },
  contentContainer: {
    padding: 12
  }
});
