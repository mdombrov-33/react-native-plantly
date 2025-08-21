import { theme } from '@/theme';
import { AntDesign } from '@expo/vector-icons';
import { Link, Stack } from 'expo-router';
import { Pressable } from 'react-native';

//* make sure that if we're not rendering index, to make index render underneath anyway
export const unstable_settings = {
  initialRouteName: 'index'
};

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Home',
          headerRight: () => {
            return (
              <Link href="/new" asChild>
                <Pressable hitSlop={20}>
                  <AntDesign
                    name="pluscircleo"
                    size={24}
                    color={theme.colorGreen}
                  />
                </Pressable>
              </Link>
            );
          }
        }}
      ></Stack.Screen>
      <Stack.Screen
        name="plants/[plantId]"
        options={{
          title: ''
        }}
      ></Stack.Screen>
    </Stack>
  );
}
