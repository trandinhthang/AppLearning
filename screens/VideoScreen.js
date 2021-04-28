import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    SafeAreaView,
    StyleSheet,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import { createStackNavigator } from '@react-navigation/stack';
import VideoDetailScreen from '../components/VideoDetailScreen';

const VideoScreen = ({ navigation }) => {
    const listVideos = [
        {
            id: 1,
            nameVideo: 'Bảng chữ cái',
            urlVideo: require('../assests/videos/bangchucai.mp4'),
            urlImage: require('../assests/images/chucai.png'),
            keyVideo: '5xuZxGirWQI',
        },
        {
            id: 2,
            nameVideo: 'Đếm số 1 đến 10',
            urlVideo: require('../assests/videos/demso.mp4'),
            urlImage: require('../assests/images/so.png'),
            keyVideo: 'woqBQG7LG8s',
        },
        {
            id: 3,
            nameVideo: 'Màu sắc',
            urlVideo: require('../assests/videos/mausac.mp4'),
            urlImage: require('../assests/images/color.png'),
            keyVideo: 'fZR66TjjrDc',
        },
        {
            id: 4,
            nameVideo: 'Gia đình ',
            urlVideo: require('../assests/videos/giadinh.mp4'),
            urlImage: require('../assests/images/giadinh.png'),
            keyVideo: 'n32QfctoTrE',
        },
        {
            id: 5,
            nameVideo: 'Động vật',
            urlVideo: require('../assests/videos/traicay.mp4'),
            urlImage: require('../assests/images/animal.png'),
            keyVideo: 'K_dG7uyA2tQ',
        },
    ];
    return (
        <View style={Styles.container}>
            <ScrollView>
                {listVideos.map((video) => (
                    <TouchableOpacity
                        key={video.id}
                        onPress={() => navigation.navigate('videoDetail', video)}>
                        <SafeAreaView style={Styles.item}>
                            <View style={Styles.itemContent}>
                                <Image
                                    style={Styles.image}
                                    resizeMode="contain"
                                    source={video.urlImage}
                                />
                                <View style={Styles.textContent}>
                                    <Text style={{ color: '#044075', fontSize: 15 }}>
                                        Luyện nghe tiếng Pháp: {video.nameVideo}
                                    </Text>
                                    <Text style={{ color: 'gray', fontSize: 10 }}>Cơ bản</Text>
                                </View>
                                <View>
                                    <Ionicons
                                        color="#167fdb"
                                        name="ellipsis-vertical-outline"
                                        size={20}
                                    />
                                </View>
                            </View>
                        </SafeAreaView>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const VideoStack = createStackNavigator();
export default function VocabularyList() {
    return (
        <VideoStack.Navigator initialRouteName="videoScreen">
            <VideoStack.Screen name="videoScreen" component={VideoScreen} />
            <VideoStack.Screen name="videoDetail" component={VideoDetailScreen} />
        </VideoStack.Navigator>
    );
}

const Styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    item: {
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        backgroundColor: '#0000',
        margin: 12,
        width: '93%',
        height: 102,
    },
    itemContent: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: 'white',
    },
    image: {
        width: 100,
        height: 100,
    },
    textContent: {
        width: 200,
        justifyContent: 'center',
    },
});
