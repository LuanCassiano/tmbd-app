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

import Loading from '../../components/Loading';
import AnimatedHeader from '../../components/AnimatedHeader';

import * as Styled from './styles';

import { NavigationProps } from '../../routes';

import * as MovieActions from '../../store/module/Movie/actions';
import { RootState } from '../../store/module/rootReducer';

import IconStar from '../../assets/icons/star_1.png';
import IconGroup from '../../assets/icons/group.png';

const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

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
        <Styled.Container>
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
                        style={{
                            flex: 1,
                        }}
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
                        <Styled.Content>
                            <Styled.TitleContainer>
                                <Styled.Title>{movieDetail.title}</Styled.Title>
                            </Styled.TitleContainer>

                            <Styled.SectionEvaluation>
                                <Styled.Row>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            source={IconStar}
                                            style={{
                                                width: 10,
                                                height: 10,
                                                marginRight: 5,
                                            }}
                                        />
                                    </View>
                                    <Styled.SectionEvaluationText>
                                        {movieDetail.vote_average}
                                    </Styled.SectionEvaluationText>
                                </Styled.Row>

                                <Styled.SectionEvaluationText>
                                    {movieDetail.vote_count} votes
                                </Styled.SectionEvaluationText>

                                <Styled.Row>
                                    <View
                                        style={{
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Image
                                            source={IconGroup}
                                            style={{
                                                width: 15,
                                                height: 15,
                                                marginRight: 5,
                                            }}
                                        />
                                    </View>
                                    <Styled.SectionEvaluationText>
                                        {movieDetail.popularity}
                                    </Styled.SectionEvaluationText>
                                </Styled.Row>
                            </Styled.SectionEvaluation>

                            <Styled.Section>
                                <Styled.Label>Overview</Styled.Label>

                                <Styled.Paragraph>
                                    {movieDetail.overview}
                                </Styled.Paragraph>
                            </Styled.Section>

                            <Styled.Section>
                                <Styled.Label>Genre</Styled.Label>

                                <Styled.Row>
                                    {movieDetail.genres.map(item => (
                                        <Styled.TagContainer key={item.id}>
                                            <Styled.TagTitle>
                                                {item.name}
                                            </Styled.TagTitle>
                                        </Styled.TagContainer>
                                    ))}
                                </Styled.Row>
                            </Styled.Section>

                            <Styled.Section>
                                <Styled.Label>Spoken languages</Styled.Label>

                                <Styled.Row>
                                    {movieDetail.spoken_languages.map(
                                        (item, index) => (
                                            <Styled.TagContainer key={index}>
                                                <Styled.TagTitle>
                                                    {item.name}
                                                </Styled.TagTitle>
                                            </Styled.TagContainer>
                                        ),
                                    )}
                                </Styled.Row>
                            </Styled.Section>

                            <Styled.Section>
                                <Styled.Label>
                                    Production companies
                                </Styled.Label>

                                <Styled.Row>
                                    {movieDetail.production_companies.map(
                                        item => (
                                            <Styled.TagContainer key={item.id}>
                                                <Styled.TagTitle>
                                                    {item.name}
                                                </Styled.TagTitle>
                                            </Styled.TagContainer>
                                        ),
                                    )}
                                </Styled.Row>
                            </Styled.Section>

                            <Styled.Section>
                                <Styled.Label>
                                    Production countries
                                </Styled.Label>

                                <Styled.Row>
                                    {movieDetail.production_countries.map(
                                        (item, index) => (
                                            <Styled.TagContainer key={index}>
                                                <Styled.TagTitle>
                                                    {item.name}
                                                </Styled.TagTitle>
                                            </Styled.TagContainer>
                                        ),
                                    )}
                                </Styled.Row>
                            </Styled.Section>

                            <Styled.Section>
                                <Styled.Label>Release date</Styled.Label>

                                <Styled.Paragraph>
                                    {movieDetail.release_date}
                                </Styled.Paragraph>
                            </Styled.Section>
                        </Styled.Content>
                    </Animated.ScrollView>

                    <AnimatedHeader
                        title={movieDetail.title}
                        image_url={movieDetail.poster_path}
                        headerOpacityAnimation={headerOpacity}
                        headerTranslateAnimation={headerTranslate}
                        imageOpacityAnimation={imageOpacity}
                        imageTranslateAnimation={imageTranslate}
                        titleScaleAnimation={titleScale}
                        titleTranslateAnimation={titleTranslate}
                    />
                </>
            )}
        </Styled.Container>
    );
}
