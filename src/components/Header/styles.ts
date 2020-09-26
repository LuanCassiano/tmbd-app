import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 20px;
    background-color: #000000;
    elevation: 5;
`;

export const Content = styled.View`
    flex-direction: row;
`;

export const HeaderActionButton = styled.TouchableOpacity`
    width: 30px;
    height: 30px;
    margin: 0px 20px 0px 0px;
    align-items: center;
    justify-content: center;
`;

export const HeaderActionButtonIcon = styled.Image`
    width: 25px;
    height: 25px;
`;

export const TitleContainer = styled.View`
    flex: 1;
    align-items: center;
`;

export const Title = styled.Text`
    color: #fff9c4;
    font-family: 'Montserrat-Bold';
    font-size: 20px;
    text-transform: uppercase;
`;
