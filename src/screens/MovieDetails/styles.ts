import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: #151515;
`;

export const Content = styled.View`
    padding: 320px 20px 20px 20px;
`;

export const TitleContainer = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-family: 'Montserrat-SemiBold';
    color: #fff9c4;
`;

export const SectionEvaluation = styled.View`
    margin-top: 20px;
    flex-direction: row;
    justify-content: space-around;
`;

export const SectionEvaluationText = styled.Text`
    font-size: 14px;
    font-family: 'Montserrat-SemiBold';
    color: #fff9c4;
`;

export const Section = styled.View`
    margin-top: 20px;
`;

export const Label = styled.Text`
    font-size: 12px;
    font-family: 'Montserrat-Bold';
    color: #fff9c4;
    margin-bottom: 10px;
`;

export const Paragraph = styled.Text`
    font-size: 16px;
    font-family: 'Montserrat-Medium';
    color: #f5f5f5;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const TagContainer = styled.View`
    border: 1px solid #f5f5f5;
    margin-right: 10px;
    border-radius: 5px;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
`;

export const TagTitle = styled.Text`
    font-size: 12px;
    font-family: 'Montserrat-Regular';
    color: #f5f5f5;
`;
