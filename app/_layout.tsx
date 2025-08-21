import { Stack } from 'expo-router';
import { useEffect } from 'react';
import * as QuickActions from 'expo-quick-actions';
import { Platform } from 'react-native';
import { useQuickActionRouting } from 'expo-quick-actions/router';

export default function Layout() {
  //* Lock the splash screen
  // SplashScreen.preventAutoHideAsync();
  //* Hide the splash screen
  // SplashScreen.hideAsync();
  //* Could be useful in auth scenarios where we want to check some info, and when its ready we can hide the splash screen

  //* use it when we pass params into quick actions like below
  //* to automatically link to the page that is specified in href
  useQuickActionRouting();

  const setQuickActions = () => {
    QuickActions.setItems([
      {
        title: 'Add a plant',
        icon: Platform.OS === 'ios' ? 'symbol:leaf' : 'leaf', //* leaf is the name in app.json
        id: '0',
        params: { href: '/new' }
      }
    ]);
  };

  useEffect(() => {
    setQuickActions();
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false, animation: 'fade' }}
      ></Stack.Screen>
      <Stack.Screen
        name="onboarding"
        options={{ headerShown: false, animation: 'fade' }}
      ></Stack.Screen>
      <Stack.Screen
        name="new"
        options={{
          presentation: 'modal',
          title: 'New Plant'
        }}
      ></Stack.Screen>
    </Stack>
  );
}
