import React, { ReactElement, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    Animated,
    Platform,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';

import { IMAGE_URL } from '../../helpers/Constants';

import Loading from '../../components/Loading';

import { NavigationProps } from '../../routes';

import * as MovieActions from '../../store/module/Movie/actions';
import { RootState } from '../../store/module/rootReducer';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#000000',
        overflow: 'hidden',
        height: HEADER_MAX_HEIGHT,
        elevation: 5,
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: undefined,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
    },
    bar: {
        backgroundColor: 'transparent',
        marginTop: Platform.OS === 'ios' ? 50 : 50,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        elevation: 5,
    },
    title: {
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        // iOS uses content inset, which acts like padding.
        paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: '#D3D3D3',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default function MovieDetails(): ReactElement {
    const navigation = useNavigation<NavigationProps>();
    const route = useRoute<NavigationProps>();

    const scrollOffset = new Animated.Value(
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
    );

    const { movieDetail, loading } = useSelector(
        (state: RootState) => state.movie,
    );

    const scrollY = Animated.add(
        scrollOffset,
        Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );

    const headerTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -HEADER_SCROLL_DISTANCE],
        extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });

    const imageTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 100],
        extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0.8],
        extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, -8],
        extrapolate: 'clamp',
    });

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp',
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(MovieActions.getMovieDetailsRequest(route?.params?.id));
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: '#151515' }}>
            {loading ? (
                <Loading />
            ) : (
                <>
                    <StatusBar
                        barStyle="light-content"
                        translucent
                        backgroundColor="rgba(0, 0, 0, 0.251)"
                    />
                    <Animated.ScrollView
                        style={styles.fill}
                        scrollEventThrottle={1}
                        contentInset={{ top: HEADER_MAX_HEIGHT }}
                        contentOffset={{ y: -HEADER_MAX_HEIGHT }}
                        onScroll={Animated.event(
                            [
                                {
                                    nativeEvent: {
                                        contentOffset: { y: scrollOffset },
                                    },
                                },
                            ],
                            { useNativeDriver: true },
                        )}
                    >
                        <View
                            style={{
                                paddingTop: 320,
                                paddingLeft: 20,
                                paddingRight: 20,
                                paddingBottom: 20,
                            }}
                        >
                            <View style={{ alignItems: 'center' }}>
                                <Text
                                    style={{
                                        fontSize: 20,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: '#fff9c4',
                                    }}
                                >
                                    {movieDetail.title}
                                </Text>
                            </View>

                            <View
                                style={{
                                    marginTop: 20,
                                    flexDirection: 'row',
                                    justifyContent: 'space-around',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: '#fff9c4',
                                    }}
                                >
                                    {movieDetail.vote_average}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: '#fff9c4',
                                    }}
                                >
                                    {movieDetail.vote_count} votes
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: '#fff9c4',
                                    }}
                                >
                                    {movieDetail.popularity}
                                </Text>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Overview
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#f5f5f5',
                                    }}
                                >
                                    {movieDetail.overview}
                                </Text>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Genre
                                </Text>
                                <View style={{ flexDirection: 'row' }}>
                                    {movieDetail.genres.map(item => (
                                        <View
                                            key={item.id}
                                            style={{
                                                borderWidth: 1,
                                                borderColor: '#f5f5f5',
                                                marginRight: 10,
                                                borderRadius: 5,
                                                paddingLeft: 10,
                                                paddingRight: 10,
                                                paddingVertical: 5,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{ color: '#f5f5f5' }}>
                                                {item.name}
                                            </Text>
                                        </View>
                                    ))}
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Spoken languages
                                </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    {movieDetail.spoken_languages.map(
                                        (item, index) => (
                                            <View
                                                key={index}
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: '#f5f5f5',
                                                    marginRight: 10,
                                                    borderRadius: 5,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingVertical: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{ color: '#f5f5f5' }}
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                        ),
                                    )}
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Production companies
                                </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    {movieDetail.production_companies.map(
                                        item => (
                                            <View
                                                key={item.id}
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: '#f5f5f5',
                                                    marginRight: 10,
                                                    borderRadius: 5,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingVertical: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{ color: '#f5f5f5' }}
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                        ),
                                    )}
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Production countries
                                </Text>

                                <View style={{ flexDirection: 'row' }}>
                                    {movieDetail.production_countries.map(
                                        item => (
                                            <View
                                                key={item.iso_639_1}
                                                style={{
                                                    borderWidth: 1,
                                                    borderColor: '#f5f5f5',
                                                    marginRight: 10,
                                                    borderRadius: 5,
                                                    paddingLeft: 10,
                                                    paddingRight: 10,
                                                    paddingVertical: 5,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}
                                            >
                                                <Text
                                                    style={{ color: '#f5f5f5' }}
                                                >
                                                    {item.name}
                                                </Text>
                                            </View>
                                        ),
                                    )}
                                </View>
                            </View>

                            <View style={{ marginTop: 20 }}>
                                <Text
                                    style={{
                                        color: '#fff9c4',
                                        fontSize: 12,
                                        fontFamily: 'Montserrat-Bold',
                                        marginBottom: 10,
                                    }}
                                >
                                    Release date
                                </Text>

                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Montserrat-Regular',
                                        color: '#f5f5f5',
                                    }}
                                >
                                    {movieDetail.release_date}
                                </Text>
                            </View>
                        </View>
                    </Animated.ScrollView>
                    <Animated.View
                        pointerEvents="none"
                        style={[
                            styles.header,
                            { transform: [{ translateY: headerTranslate }] },
                        ]}
                    >
                        <Animated.Image
                            style={[
                                styles.backgroundImage,
                                {
                                    opacity: imageOpacity,
                                    transform: [{ translateY: imageTranslate }],
                                },
                            ]}
                            source={{
                                uri: `${IMAGE_URL}${movieDetail.poster_path}`,
                            }}
                        />
                    </Animated.View>
                    <Animated.View
                        style={[
                            styles.bar,
                            {
                                opacity: headerOpacity,
                                transform: [
                                    { scale: titleScale },
                                    { translateY: titleTranslate },
                                ],
                            },
                        ]}
                    >
                        <Text
                            style={{
                                color: '#fff9c4',
                                fontSize: 20,
                                fontFamily: 'Montserrat-SemiBold',
                            }}
                        >
                            {movieDetail.title}
                        </Text>
                    </Animated.View>
                </>
            )}
        </View>
    );
}
