import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    margin-bottom: 20px;
`;

export const Card = styled.View`
    width: 150px;
    height: 200px;
    margin-right: 25px;
    border-radius: 5px;
`;

export const CardMedia = styled.Image`
    width: 150px;
    height: 200px;
    border-radius: 5px;
`;

export const CardBody = styled.View`
    flex: 1;
    margin-top: 5px;
`;

export const CardTitle = styled.Text`
    font-family: 'Montserrat-Black';
    font-size: 10px;
    color: #f5f5f5;
`;

export const CardLabel = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 10px;
    color: #f5f5f5;
    margin: 5px 0px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-right: 25px;
`;
