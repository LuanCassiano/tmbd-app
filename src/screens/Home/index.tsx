import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import { getSectionItems } from '../../helpers/getFiveItemsBySection';

import * as Styled from './styles';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';
import Loading from '../../components/Loading';

import * as MovieActions from '../../store/module/Movie/actions';

import { RootState } from '../../store/module/rootReducer';

import IMovie from '../../interfaces/IMovie';
import ISectionContent from './interfaces/ISectionContent';

import sectionJson from '../../data/section.json';

export default function Home(): ReactElement {
    const navigation = useNavigation();

    const dispatch = useDispatch();

    const { loading, upcoming, nowPlaying, popular, topRated } = useSelector(
        (state: RootState) => state.movie,
    );

    const [upcomingSectionItems, setUpcomingSectionItems] = useState<IMovie[]>(
        [],
    );
    const [nowPlayingSectionItems, setNowPlayingSectionItems] = useState<
        IMovie[]
    >([]);
    const [popularSectionItems, setPopularSectionItems] = useState<IMovie[]>(
        [],
    );
    const [topRatedSectionItems, setTopRatedSectionItems] = useState<IMovie[]>(
        [],
    );

    function getUpcomingMovies(): void {
        dispatch(MovieActions.getUpcomingRequest());
    }

    function getNowPlayingMovies(): void {
        dispatch(MovieActions.getNowPlayingRequest());
    }

    function getPopularMovies(): void {
        dispatch(MovieActions.getPopularRequest());
    }

    function getTopRatedMovies(): void {
        dispatch(MovieActions.getTopRatedRequest());
    }

    function onNavigate(screen: string): void {
        navigation.navigate(screen);
    }

    function _renderSection(data: IMovie[]): ReactElement {
        return (
            <FlatList
                keyExtractor={(item: IMovie): string => String(item.id)}
                data={data}
                renderItem={({ item }): ReactElement => (
                    <CardMovie data={item} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        );
    }

    function getSection(section: string): string {
        const renderContent: ISectionContent = {
            upcoming: _renderSection(upcomingSectionItems),
            now_playing: _renderSection(nowPlayingSectionItems),
            popular: _renderSection(popularSectionItems),
            top_rated: _renderSection(topRatedSectionItems),
        };

        return renderContent[section];
    }

    useEffect(() => {
        getUpcomingMovies();
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
    }, []);

    useEffect(() => {
        if (!loading) {
            const response = getSectionItems(upcoming);
            setUpcomingSectionItems(response.sectionItem);

            const responseNowPlaying = getSectionItems(nowPlaying);
            setNowPlayingSectionItems(responseNowPlaying.sectionItem);

            const responsePopular = getSectionItems(popular);
            setPopularSectionItems(responsePopular.sectionItem);

            const responseTopRated = getSectionItems(topRated);
            setTopRatedSectionItems(responseTopRated.sectionItem);

            return;
        }
    }, [upcoming, nowPlaying, popular, topRated]);

    return (
        <Styled.Container>
            <Header title="tmdb" />

            {loading ? (
                <Loading />
            ) : (
                <ScrollView showsVerticalScrollIndicator={false}>
                    {sectionJson.map(item => (
                        <Styled.Section key={item.id}>
                            <Styled.Row>
                                <Styled.Title>{item.sectionName}</Styled.Title>
                                <Styled.SectionAction
                                    onPress={(): void =>
                                        onNavigate(item.sectionKeyText)
                                    }
                                >
                                    <Styled.SectionActionText>
                                        See all
                                    </Styled.SectionActionText>
                                </Styled.SectionAction>
                            </Styled.Row>
                            {getSection(item.sectionKeyText)}
                        </Styled.Section>
                    ))}
                </ScrollView>
            )}
        </Styled.Container>
    );
}
