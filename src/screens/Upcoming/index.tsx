import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { View, Image, Dimensions, Animated, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import Header from '../../components/Header';
import Backdrop from './Backdrop';
import Loading from '../../components/Loading';

import * as MovieActions from '../../store/module/Movie/actions';

import { RootState } from '../../store/module/rootReducer';

import { IMAGE_URL } from '../../helpers/Constants';

import IMovie from '../../interfaces/IMovie';

const { width } = Dimensions.get('window');

const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.7389;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

export default function Upcoming(): ReactElement {
    const dispatch = useDispatch();

    const scrollX = useRef(new Animated.Value(0)).current;

    const { upcoming } = useSelector((state: RootState) => state.movie);

    const [movies, setMovies] = useState<IMovie[]>([]);

    function getUpcomingMovies(): void {
        dispatch(MovieActions.getUpcomingRequest());
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    useEffect(() => {
        setMovies([{ id: 'empty-left' }, ...upcoming, { id: 'empty-right' }]);
    }, [upcoming]);

    return (
        <Styled.Container>
            <Header title="Em breve" />

            <Backdrop data={movies} animate={scrollX} />
            <Animated.FlatList
                showsHorizontalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                horizontal
                bounces={false}
                decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
                renderToHardwareTextureAndroid
                contentContainerStyle={{ alignItems: 'center' }}
                snapToInterval={ITEM_SIZE}
                snapToAlignment="start"
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                    { useNativeDriver: false },
                )}
                scrollEventThrottle={16}
                renderItem={({ item, index }) => {
                    if (!item.poster_path) {
                        return <View style={{ width: EMPTY_ITEM_SIZE }} />;
                    }
                    const translateY = scrollX.interpolate({
                        inputRange: [
                            (index - 2) * ITEM_SIZE,
                            (index - 1) * ITEM_SIZE,
                            index * ITEM_SIZE,
                        ],
                        outputRange: [100, 50, 100],
                        extrapolate: 'clamp',
                    });

                    return (
                        <View style={{ width: ITEM_SIZE }}>
                            <Animated.View
                                style={{
                                    marginHorizontal: 20,
                                    padding: 20,
                                    alignItems: 'center',
                                    transform: [{ translateY }],
                                    backgroundColor: 'rgba(0, 0, 0, 0.099)',
                                    borderRadius: 10,
                                    marginBottom: 20,
                                }}
                            >
                                <Image
                                    source={{
                                        uri: `${IMAGE_URL}${item.poster_path}`,
                                    }}
                                    style={{
                                        width: '100%',
                                        height: ITEM_SIZE * 1.1,
                                        resizeMode: 'cover',
                                        borderRadius: 10,
                                        margin: 0,
                                    }}
                                />
                            </Animated.View>
                        </View>
                    );
                }}
            />
        </Styled.Container>
    );
}
