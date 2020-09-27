import styled from 'styled-components/native';

export const ListContainer = styled.TouchableOpacity`
    padding: 10px;
`;

export const ListContent = styled.View`
    flex-direction: row;
`;

export const ListMedia = styled.Image`
    width: 90px;
    height: 90px;
    border-radius: 5px;
`;

export const ListBody = styled.View`
    width: 0px;
    flex-grow: 1;
    justify-content: center;
    margin-left: 10px;
`;

export const ListTitle = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat-Black';
    color: #fff9c4;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin: 5px 0px;
`;

export const ListLabel = styled.Text`
    font-size: 12px;
    font-family: 'Montserrat-Medium';
    color: #f5f5f5;
`;

export const Divider = styled.View`
    border: 1px solid #212121;
`;
