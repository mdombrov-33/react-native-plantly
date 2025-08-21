import { Stack } from 'expo-router';

export default function Layout() {
  //* Lock the splash screen
  // SplashScreen.preventAutoHideAsync();
  //* Hide the splash screen
  // SplashScreen.hideAsync();
  //* Could be useful in auth scenarios where we want to check some info, and when its ready we can hide the splash screen

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
