import React, { ReactElement } from 'react';

import { IMAGE_URL } from '../../helpers/Constants';

import ICardMovie from './interfaces/ICardMovie';

import * as Styled from './styles';

export default function CardMovie({ data }: ICardMovie): ReactElement {
    return (
        <Styled.Container onPress={(): void => {}}>
            <Styled.Card>
                <Styled.CardMedia
                    source={{ uri: `${IMAGE_URL}${data.poster_path}` }}
                />
            </Styled.Card>

            <Styled.CardBody>
                <Styled.CardTitle numberOfLines={2}>
                    {data.title}
                </Styled.CardTitle>

                <Styled.Row>
                    <Styled.CardLabel>{data.vote_average}</Styled.CardLabel>
                    <Styled.CardLabel>{data.vote_count} votes</Styled.CardLabel>
                </Styled.Row>

                <Styled.Row>
                    <Styled.CardLabel>Release</Styled.CardLabel>
                    <Styled.CardLabel>{data.release_date}</Styled.CardLabel>
                </Styled.Row>
            </Styled.CardBody>
        </Styled.Container>
    );
}
