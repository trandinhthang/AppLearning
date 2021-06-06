
import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    ImageBackground,
    TextInput
} from 'react-native';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Styles from '../styles/Styles';
import openbook from '../assests/images/open-book.png';
import paris from "../assests/images/paris.png";
import Home from "../assests/images/homefrance.png";
import Voice from '../assests/images/voice.png';
import Video from '../assests/images/video.png';

import word from "../assests/images/word.png"
//gọi các Screen khác từ đây sang App.js
const HomeScreen = ({ navigation }) => {
    return (
        <ImageBackground source={Home} style={{ width: "100%", height: "110%" }}>

            <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 53 }}>
                <Text style={Styles.textHeader}>
                    Bonjour, bonne journée
                </Text>
                <View style={Styles.viewInput}>
                    <TextInput placeholder="Muốn ghi gì thì ghi vào đây nhé !" placeholderTextColor="#239dad" style={{ fontWeight: 'bold', fontSize: 13, width: 255 }} />
                    <Entypo name='paper-plane' color='#239dad' size={16} />
                </View>
                <View style={Styles.viewContent}>
                    <View>
                        <Text style={Styles.textContent}>Bắt đầu với những bài học</Text>
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2}
                        >
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Bài học cơ bản</Text>
                            <Icon name='lock' color='white' size={20} style={{ paddingLeft: 24 }} />
                        </TouchableOpacity>
                        <TouchableOpacity style={Styles.touchContent} activeOpacity={0.2}
                            >
                            <Text style={{ fontWeight: 'bold', color: 'white' }}>Bài học nâng cao </Text>
                            <Icon name='lock' color='white' size={20} style={{ paddingLeft: 5 }} />
                        </TouchableOpacity>
                    </View>
                    <Image source={paris}
                        style={Styles.imageContent} />
                </View>
                <Text style={Styles.textContent_2}>Góc học tập</Text>
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Vocabulary')}>
                    <View style={Styles.viewCategories} >
                        {/* <Image  source={openbook}/> */}
                        <LottieView
                            style={Styles.translateImage}
                            source={require('../assests/animation/vocabulary.json')}
                            autoPlay
                            loop
                            speed={1.5}
                        />
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                                Vocabulaire
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Từ vựng</Text>
                            <Text style={{ color: 'white', fontSize: 13 }}>5 chủ đề, 50 từ vựng</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Video')}>
                    <View style={Styles.viewCategories} >
                        {/* <Image style={Styles.translateImage} source={Video}/> */}
                        <LottieView
                            style={{ width:70, height:70}}
                            source={require('../assests/animation/video.json')}
                            autoPlay
                            loop
                            speed={1.5}
                        />
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                                Voir la vidéo
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Xem video</Text>
                            <Text style={{ color: 'white', fontSize: 13 }}>Luyện nghe từ video</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Exam', { diff: 'MEDIUM' })}>
                    <View style={Styles.viewCategories} >
                        {/* <Image style={Styles.translateImage} source={word}/> */}
                        <LottieView
                           style={{ width:70, height:70}}
                            source={require('../assests/animation/exam.json')}
                            autoPlay
                            loop
                            speed={1.5}
                        />
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                                Entraîne toi
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Trắc nghiệm cơ bản</Text>
                            <Text style={{ color: 'white', fontSize: 13 }}>Bài học trắc ngiệm 1</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Exam', { diff: 'HARD' })}>
                    <View style={Styles.viewCategories} >
                     
                        <LottieView
                            style={Styles.translateImage}
                            source={require('../assests/animation/exam2.json')}
                            autoPlay
                            loop
                            speed={1.5}
                        />
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                                Entraîne toi
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Trắc nghiệm nâng cao</Text>
                            <Text style={{ color: 'white', fontSize: 13 }}>Bài học trắc ngiệm 2</Text>
                        </View>
                    </View>
                </TouchableOpacity> */}
                <TouchableOpacity activeOpacity={0.2} onPress={() => navigation.navigate('Word')}>
                    <View style={Styles.viewCategories} >

                        <LottieView
                            style={{paddingLeft:5,height:60}}
                            source={require('../assests/animation/quiz.json')}
                            autoPlay
                            loop
                            speed={3}
                        />
                        <View style={{ paddingHorizontal: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
                                Remplir le mot
                            </Text>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Điền từ vựng</Text>
                            <Text style={{ color: 'white', fontSize: 13 }}>Bài học trí nhớ, luyện từ vựng</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>

    );
}
export default HomeScreen;
