import React, { ReactElement } from 'react';

import { IMAGE_URL } from '../../helpers/Constants';

import * as Styled from './styles';

import IListMovie from './interfaces/IListMovie';

export default function ListMovie({ data }: IListMovie): ReactElement {
    return (
        <>
            <Styled.ListContainer>
                <Styled.ListContent>
                    <Styled.ListMedia
                        source={{ uri: `${IMAGE_URL}${data.poster_path}` }}
                    />

                    <Styled.ListBody>
                        <Styled.ListTitle>{data.title}</Styled.ListTitle>

                        <Styled.Row>
                            <Styled.ListLabel>
                                {data.vote_average}
                            </Styled.ListLabel>
                            <Styled.ListLabel>
                                {data.vote_count} votes
                            </Styled.ListLabel>
                        </Styled.Row>

                        <Styled.Row>
                            <Styled.ListLabel>Release</Styled.ListLabel>
                            <Styled.ListLabel>
                                {data.release_date}
                            </Styled.ListLabel>
                        </Styled.Row>
                    </Styled.ListBody>
                </Styled.ListContent>
            </Styled.ListContainer>
            <Styled.Divider />
        </>
    );
}
