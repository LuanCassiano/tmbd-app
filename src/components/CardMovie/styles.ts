import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

<<<<<<< HEAD
// export const Container = styled.TouchableOpacity`
//     margin: 10px;
// `;
=======
export const Container = styled.TouchableOpacity`
    margin-bottom: 20px;
`;
>>>>>>> cf4d3009b3dd2e1af070fcaa29648598d570a047

export const Card = styled.View`
    padding: 20px;
    border-radius: 5px;
    elevation: 5;
    background-color: #000000;
    flex-direction: row;
    margin: 10px;
`;

export const CardMedia = styled.Image`
    width: 100px;
    border-radius: 5px;
`;

export const CardBody = styled.View`
    flex: 1;
    margin-left: 10px;
`;

export const CardTitle = styled.Text`
    font-family: 'Montserrat-Black';
    font-size: 14px;
    color: #f5f5f5;
`;

export const CardParagraph = styled.Text`
    font-family: 'Montserrat-Medium';
    font-size: 14px;
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
    margin-top: 20px;
`;
