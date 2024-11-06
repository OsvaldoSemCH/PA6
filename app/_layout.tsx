import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function RootLayout()
{
    return (
    <Stack>
        <Stack.Screen name="(calculator)" options={{ headerShown: false }}/>
    </Stack>
    );
}