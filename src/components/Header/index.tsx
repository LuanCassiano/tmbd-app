import React, { ReactElement } from 'react';
import IHeader from './interfaces/IHeader';

import * as Styled from './styles';

export default function Header({ title }: IHeader): ReactElement {
    return (
        <Styled.Container>
            <Styled.Content>
                <Styled.TitleContainer>
                    <Styled.Title>{title}</Styled.Title>
                </Styled.TitleContainer>
            </Styled.Content>
        </Styled.Container>
    );
}
