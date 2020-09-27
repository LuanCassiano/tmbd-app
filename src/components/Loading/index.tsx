import React, { ReactElement } from 'react';
import { ActivityIndicator } from 'react-native';

import * as Styled from './styles';

export default function Loading(): ReactElement {
    return (
        <Styled.Container>
            <ActivityIndicator size="large" color="#fff9c4" />
        </Styled.Container>
    );
}
