import React, {Fragment} from 'react';
import {View,TouchableOpacity, Text} from 'react-native';

interface AnswerProps{
    answers: string[],
    onPress?:() => void;
}

export default function Answer( {answers}: AnswerProps) {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:40}}>
            {answers.map((_,index) =>(
                <Fragment key={index}>
                   <TouchableOpacity onPress={() => alert(answers[index])}>
                        <Text>{answers[index]}</Text>
                   </TouchableOpacity>
                </Fragment>
            ))}
        </View>
    )
}
