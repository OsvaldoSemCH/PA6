import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout()
{
    return (
    <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
    );
}