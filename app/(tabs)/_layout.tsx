import { Link, Redirect, Tabs } from 'expo-router';
import Entypo from '@expo/vector-icons/Entypo';
import { theme } from '@/theme';
import { useUserStore } from '@/store/userStore';
import { AntDesign, Feather } from '@expo/vector-icons';
import { Pressable } from 'react-native';

export default function Layout() {
  //* Similar to auth logic
  const hasFinishedOnboarding = useUserStore(
    (state) => state.hasFinishedOnboarding
  );

  if (!hasFinishedOnboarding) {
    return <Redirect href="/onboarding"></Redirect>;
  }

  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorGreen }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Entypo name="leaf" size={size} color={color} />
          ),
          headerRight: () => {
            return (
              <Link href="/new" asChild>
                <Pressable style={{ marginRight: 18 }} hitSlop={20}>
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
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="user" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  );
}
