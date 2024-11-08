import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout()
{
    return (
    <Tabs
        screenOptions=
        {{
            headerShown: false,
        }}>
        <Tabs.Screen
            name="index"
            options=
            {{
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="explore"
            options=
            {{
                headerShown: false,
            }}
        />
    </Tabs>
    );
}
