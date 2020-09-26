import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';

const Stack = createStackNavigator();

function HomeNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

export default function RootNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="root" component={HomeNavigator} />
        </Stack.Navigator>
    );
}
