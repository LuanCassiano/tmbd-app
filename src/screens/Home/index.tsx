import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
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

    function getUpcomingMovies(): void {
        dispatch(MovieActions.getUpcomingRequest());
    }

    function onNavigate(idMovie: number): void {
        navigation.navigate('movieDetails', {
            id: idMovie,
        });
    }

    function _renderSection(data: IMovie[]): ReactElement {
        return (
            <FlatList
                keyExtractor={(item: IMovie): string => String(item.id)}
                data={data}
                renderItem={({ item }): ReactElement => (
                    <CardMovie data={item} action={onNavigate} />
                )}
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
        </Styled.Container>
    );
}
