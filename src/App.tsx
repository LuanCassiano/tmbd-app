import 'react-native-gesture-handler';

import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';

export default function App(): ReactElement {
    return (
        <NavigationContainer>
            <Routes />
        </NavigationContainer>
    );
}
