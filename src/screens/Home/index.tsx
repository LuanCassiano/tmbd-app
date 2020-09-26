import React, { ReactElement, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { getSectionItems } from '../../helpers/getFiveItemsBySection';

import * as Styled from './styles';

import Header from '../../components/Header';
import CardMovie from '../../components/CardMovie';

import * as MovieActions from '../../store/module/Movie/actions';
import { RootState } from '../../store/module/rootReducer';
import IMovie from '../../interfaces/IMovie';

// interface ISectionContent {
//     [key: string]: string;
// }

export default function Home(): ReactElement {
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

    function _renderUpcomingCard(data: IMovie[]): ReactElement {
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

    function _renderSectionContent(
        data: IMovie[],
        section: string,
    ): ISectionContent {
        const renderContent = {
            Upcoming: _renderUpcomingCard(data),
        }[section];

        return renderContent;
    }

    useEffect(() => {
        getUpcomingMovies();
    }, []);

    useEffect(() => {
        if (upcoming.length > 0) {
            const response = getSectionItems(upcoming);
            setUpcomingSectionItems(response.sectionItem);
            return;
        }
    }, [upcoming]);

    return (
        <Styled.Container>
            <Header title="tmdb" />

            {['Upcoming', 'Now Playing', 'Popular', 'Top Rated'].map(
                (item, index) => (
                    <Styled.Section key={index}>
                        <Styled.Title>{item}</Styled.Title>
                        {_renderSectionContent(upcomingSectionItems, item)}
                    </Styled.Section>
                ),
            )}
        </Styled.Container>
    );
}
