import React,{Fragment} from 'react';
import{Text, Dimensions} from 'react-native';
import {Box} from './theme';

const {height,width} = Dimensions.get('window');

interface QuestionSlideProps{
    question: string[];
}

function QuestionSlide ( {question}: QuestionSlideProps) {
    return (
        <Box {...{width}} style={{padding:15,alignItems:"center" }}  >
            <Text>Number</Text>
            <Text>{question}</Text>
        </Box>
    )
}
export default  QuestionSlide;
    