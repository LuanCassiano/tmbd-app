import React, { ReactElement } from 'react';
import { Animated, View, Text, TouchableOpacity, Image } from 'react-native';

import IAnimatedHeader from './interfaces/IAnimatedHeader';

import { IMAGE_URL } from '../../helpers/Constants';

import styles from './RNStyle';
import * as Styled from './styles';

import IconBack from '../../assets/icons/chevron.png';

export default function AnimatedHeader({
    title,
    image_url,
    headerOpacityAnimation,
    headerTranslateAnimation,
    imageOpacityAnimation,
    imageTranslateAnimation,
    titleScaleAnimation,
    titleTranslateAnimation,
}: IAnimatedHeader): ReactElement {
    return (
        <>
            <Animated.View
                style={[
                    styles.header,
                    {
                        transform: [
                            {
                                translateY: headerTranslateAnimation,
                            },
                        ],
                    },
                ]}
            >
                <Animated.Image
                    style={[
                        styles.backgroundImage,
                        {
                            opacity: imageOpacityAnimation,
                            transform: [
                                { translateY: imageTranslateAnimation },
                            ],
                        },
                    ]}
                    source={{
                        uri: `${IMAGE_URL}${image_url}`,
                    }}
                />
            </Animated.View>

            <Animated.View
                style={[
                    styles.bar,
                    {
                        opacity: headerOpacityAnimation,
                        transform: [
                            { scale: titleScaleAnimation },
                            { translateY: titleTranslateAnimation },
                        ],
                    },
                ]}
            >
                <Styled.Title>{title}</Styled.Title>
            </Animated.View>
        </>
    );
}
