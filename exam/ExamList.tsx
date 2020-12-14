import React,{Fragment, useRef } from 'react'
import {Dimensions, Button} from 'react-native';
import Animated, {multiply} from 'react-native-reanimated';
import {verticalScale} from 'react-native-size-matters';
import {Box,Text} from './theme';
import {useScrollHandler} from  "react-native-redash/lib/module/v1";
const {View, ScrollView} = Animated;

import QuizContainer from './QuizContainer';
import QuestionSlide from './QuestionSlide';
import Answer from './Answer';

import {questions} from './data';

const {height, width} = Dimensions.get("window");

const ExamList = () => {
    const { x, scrollHandler} = useScrollHandler();
    const scroll= useRef<Animated.ScrollView>(null);
    return (
        <QuizContainer>
            <Box flex={1}>
                <Box justifyContent="flex-start" flex={1} flexDirection="column">
                    <Box height={verticalScale(height * 0.3)} style={{backgroundColor:'orange'}} >
                        <ScrollView ref={scroll}
                                    horizontal
                                    snapToInterval={width}
                                    decelerationRate='normal'
                                    bounces={false}   
                                    showsHorizontalScrollIndicator={false}   
                                    pointerEvents="none"
                                    {...scrollHandler}
                        >
                            {questions.map(({question},index) => (
                                <Fragment key={index}>
                                    <QuestionSlide {...{question }}/>
                                </Fragment>
                            ))}
                        </ScrollView>
                    </Box>
                    <Box height={0.4*height} style={{flex:1,backgroundColor:'red',paddingTop:8}}>
                        <View style={{  backgroundColor:'yellow',
                                        width: questions.length * width,
                                        flexDirection:'row',
                                        transform: [{translateX:multiply(x,-1) }]
                        }}>
                            {questions.map(({answers},index) => (
                                <Fragment key={index}>
                                    <Answer {...{ answers }}/>
                                </Fragment>
                            ))}
                        </View>
                    </Box>
                    <View style={{flex:1,
                                backgroundColor:'white',
                                width: questions.length * width,
                                flexDirection:'row',
                                transform: [{translateX:multiply(x,-1) }]}} 
                    >
                    {questions.map(({answers},index) => {
                        const last= index === questions.length -1;
                        return (
                            <Fragment key={index}>
                                <View style={{flex:1,width,justifyContent:'center',padding:20,alignItems:'center'}}>
                                    <Button title={last ? "Submit" :" Next"}
                                        onPress={()=>{
                                            if(last){
                                            }
                                            else{
                                                scroll.current?.getNode().scrollTo({
                                                    x:width *(index+1),
                                                    animated:true,
                                                });
                                            }
                                        }}
                                    />
                                </View>
                            </Fragment>
                        )         
                    })}
                    </View>
               </Box>
            </Box>
        </QuizContainer>
    )
}
export default ExamList;
