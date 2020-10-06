import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import * as Styled from './styles';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';

import * as MovieActions from '../../store/module/Movie/actions';
import * as GenreActions from '../../store/module/Genres/actions';

import { RootState } from '../../store/module/rootReducer';

import IMovie from '../../interfaces/IMovie';
import IGenre from '../../interfaces/IGenre';

export default function Home(): ReactElement {
    const dispatch = useDispatch();

    const { loading, movies } = useSelector((state: RootState) => state.movie);

    const { genres } = useSelector((state: RootState) => state.genre);

    function getGenres(): void {
        dispatch(GenreActions.getGenresRequest());
    }

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

            <FlatList
                keyExtractor={(item: IMovie): string => String(item.id)}
                data={movies}
                renderItem={({ item }): ReactElement => (
                    <CardMovie data={item} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </Styled.Container>
    );
}
