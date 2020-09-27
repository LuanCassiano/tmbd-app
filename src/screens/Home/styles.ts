import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Section = styled.View`
    padding: 20px;
`;

export const Title = styled.Text`
    color: #fff9c4;
    font-family: 'Montserrat-Medium';
    font-size: 20px;
`;

export const SectionAction = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
`;

export const SectionActionText = styled.Text`
    color: #fff9c4;
    font-family: 'Montserrat-Medium';
    font-size: 12px;
`;

export const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
