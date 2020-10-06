import styled from 'styled-components/native';

import { Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

const BACKDROP_HEIGHT = height * 0.65;

export const Container = styled.View`
    position: absolute;
    height: ${BACKDROP_HEIGHT + 'px'};
`;

export const BackdropImage = styled.Image`
    width: ${width + 'px'};
    height: ${BACKDROP_HEIGHT + 'px'};
    position: absolute;
`;

export const AnimatedView = Animated.createAnimatedComponent(styled.View`
    position: absolute;
    height: ${height + 'px'};
    overflow: hidden;
`);
