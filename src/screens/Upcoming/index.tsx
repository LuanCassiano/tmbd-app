import React, { ReactElement, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import * as Styled from './styles';

import Header from '../../components/Header';
import ListMovie from '../../components/ListMovie';
import Loading from '../../components/Loading';

import * as MovieActions from '../../store/module/Movie/actions';

import { RootState } from '../../store/module/rootReducer';

import IMovie from '../../interfaces/IMovie';

export default function Upcoming(): ReactElement {
    const dispatch = useDispatch();

    const { loading, upcoming } = useSelector(
        (state: RootState) => state.movie,
    );

    function getUpcomingMovies(): void {
        dispatch(MovieActions.getUpcomingRequest());
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    return (
        <Styled.Container>
            <Header title="Upcoming movies" />

            {loading ? (
                <Loading />
            ) : (
                <FlatList
                    keyExtractor={(item: IMovie): string => String(item.id)}
                    data={upcoming}
                    renderItem={({ item }): ReactElement => (
                        <ListMovie data={item} />
                    )}
                />
            )}
        </Styled.Container>
    );
}
