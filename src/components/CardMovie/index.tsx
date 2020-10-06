import React, { ReactElement } from 'react';
import { IMAGE_URL } from '../../helpers/Constants';

import ICardMovie from './interfaces/ICardMovie';

import * as Styled from './styles';

export default function CardMovie({ data, action }: ICardMovie): ReactElement {
    return (
        <Styled.Card>
            <Styled.CardMedia
                source={{ uri: `${IMAGE_URL}${data.poster_path}` }}
            />

            <Styled.CardBody>
                <Styled.CardTitle numberOfLines={2}>
                    {data.title}
                </Styled.CardTitle>

                <Styled.CardParagraph numberOfLines={2}>
                    {data.overview}
                </Styled.CardParagraph>

                <Styled.Row>
                    <Styled.CardLabel>Release</Styled.CardLabel>
                    <Styled.CardLabel>{data.release_date}</Styled.CardLabel>
                </Styled.Row>
            </Styled.CardBody>
        </Styled.Card>
    );
}
