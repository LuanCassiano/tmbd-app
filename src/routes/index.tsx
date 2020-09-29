import React, { ReactElement } from 'react';
import {
    createStackNavigator,
    StackNavigationProp,
} from '@react-navigation/stack';

import HomeScreen from '../screens/Home';
import MovieDetailScreen from '../screens/MovieDetails';

const Stack = createStackNavigator();

type RootStackParamList = {
    movieDetails: { id: string } | undefined;
};

function HomeNavigator(): ReactElement {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={HomeScreen} />
            <Stack.Screen name="movieDetails" component={MovieDetailScreen} />
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

export declare type NavigationProps = StackNavigationProp<
    RootStackParamList,
    'movieDetails'
>;
