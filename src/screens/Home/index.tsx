import React, { ReactElement, useEffect, useState } from 'react';
<<<<<<< HEAD
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
=======
import { FlatList } from 'react-native';
>>>>>>> cf4d3009b3dd2e1af070fcaa29648598d570a047
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';

import * as MovieActions from '../../store/module/Movie/actions';
import * as GenreActions from '../../store/module/Genres/actions';

import { RootState } from '../../store/module/rootReducer';

import IMovie from '../../interfaces/IMovie';
<<<<<<< HEAD
import IGenre from '../../interfaces/IGenre';

export default function Home(): ReactElement {
    const dispatch = useDispatch();

    const { loading, movies } = useSelector((state: RootState) => state.movie);

    const { genres } = useSelector((state: RootState) => state.genre);
=======
import ISectionContent from './interfaces/ISectionContent';

import { NavigationProps } from '../../routes';

import sectionJson from '../../data/section.json';

export default function Home(): ReactElement {
    const navigation = useNavigation<NavigationProps>();

    const dispatch = useDispatch();

    const { loading, upcoming } = useSelector(
        (state: RootState) => state.movie,
    );

    const [upcomingSectionItems, setUpcomingSectionItems] = useState<IMovie[]>(
        [],
    );
>>>>>>> cf4d3009b3dd2e1af070fcaa29648598d570a047

    function getGenres(): void {
        dispatch(GenreActions.getGenresRequest());
    }

<<<<<<< HEAD
    function getMovies(): void {
        dispatch(MovieActions.getMoviesRequest());
    }

    useEffect(() => {
        getGenres();
        getMovies();
    }, []);

    return (
        <Styled.Container>
            <Header title="tmdb" />

            <View style={{ padding: 20 }}>
                <FlatList
                    keyExtractor={(item: IGenre): string => String(item.id)}
                    data={genres}
                    renderItem={({ item }): ReactElement => {
                        return (
                            <TouchableOpacity
                                onPress={(): void => {}}
                                style={{
                                    paddingHorizontal: 20,
                                    paddingVertical: 5,
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    borderColor: '#fff9c4',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 10,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 16,
                                        fontFamily: 'Montserrat-SemiBold',
                                        color: '#fff9c4',
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>
=======
    function onNavigate(idMovie: number): void {
        navigation.navigate('movieDetails', {
            id: idMovie,
        });
    }
>>>>>>> cf4d3009b3dd2e1af070fcaa29648598d570a047

            <FlatList
                keyExtractor={(item: IMovie): string => String(item.id)}
                data={movies}
                renderItem={({ item }): ReactElement => (
                    <CardMovie data={item} action={onNavigate} />
                )}
<<<<<<< HEAD
                showsVerticalScrollIndicator={false}
            />
=======
                numColumns={2}
                contentContainerStyle={{ paddingBottom: 30 }}
                showsVerticalScrollIndicator={false}
            />
        );
    }

    function getSection(section: string): string {
        const renderContent: ISectionContent = {
            upcoming: _renderSection(upcomingSectionItems),
        };

        return renderContent[section];
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    useEffect(() => {
        if (!loading) {
            const response = getSectionItems(upcoming);
            setUpcomingSectionItems(response.sectionItem);

            return;
        }
    }, [upcoming]);

    return (
        <Styled.Container>
            <Header title="tmdb" />

            {loading ? (
                <Loading />
            ) : (
                <>
                    {sectionJson.map(item => (
                        <Styled.Section key={item.id}>
                            {getSection(item.sectionKeyText)}
                        </Styled.Section>
                    ))}
                </>
            )}
>>>>>>> cf4d3009b3dd2e1af070fcaa29648598d570a047
        </Styled.Container>
    );
}
