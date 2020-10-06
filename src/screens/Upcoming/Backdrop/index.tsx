import React, { ReactElement, useEffect, useRef, useState } from 'react';
import {
    View,
    FlatList,
    Image,
    Dimensions,
    Animated,
    Platform,
    Text,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import * as Styled from './styles';

import IMovie from '../../../interfaces/IMovie';

import { IMAGE_URL } from '../../../helpers/Constants';

const { width, height } = Dimensions.get('window');

const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.7389;
const BACKDROP_HEIGHT = height * 0.65;

interface IBackdrop {
    data: IMovie[];
    animate: Animated.Value;
}

export default function Backdrop({ data, animate }: IBackdrop): ReactElement {
    function _renderBackdropImage(item: IMovie, index: number): ReactElement {
        const translateX = animate.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width],
        });

        return (
            <Styled.AnimatedView
                removeClippedSubviews={false}
                style={{
                    width: translateX,
                }}
            >
                <Styled.BackdropImage
                    source={{
                        uri: `${IMAGE_URL}${item.poster_path}`,
                    }}
                />
            </Styled.AnimatedView>
        );
    }

    return (
        <Styled.Container>
            <FlatList
                data={data}
                keyExtractor={(item): string => String(item.id)}
                removeClippedSubviews={false}
                contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
                renderItem={({ item, index }) =>
                    _renderBackdropImage(item, index)
                }
            />
            <LinearGradient
                colors={['rgba(0, 0, 0, 0)', '#151515']}
                style={{
                    height: BACKDROP_HEIGHT,
                    width,
                    position: 'absolute',
                    bottom: 0,
                }}
            />
        </Styled.Container>
    );
}
