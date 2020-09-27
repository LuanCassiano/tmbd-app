import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import UpcomingScreen from '../screens/Upcoming';

const Stack = createStackNavigator();

function UpcomingNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="upcomingMovies" component={UpcomingScreen} />
        </Stack.Navigator>
    );
}

function HomeNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="upcoming" component={UpcomingNavigator} />
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
