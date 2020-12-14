import React from 'react';
import {View,Text, StatusBar} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface QuizContainerProps{
    children: ReactElement;
}
function QuizContainer( {children}:  QuizContainerProps) {
    return (
        <SafeAreaView style={{flex:1}}>
            {children}
        </SafeAreaView>
    )
}
export default QuizContainer;
