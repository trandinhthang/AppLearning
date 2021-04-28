import React from 'react';
import { View, StyleSheet,Image } from 'react-native';
import {
    Drawer,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export function DrawerContent(props) {

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View >
                        <Image style={{width:"100%",height:130}} 
                        source={{uri:'https://image.freepik.com/free-vector/outline-paris-skyline-with-blue-landmarks_119523-164.jpg'}}/>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="home-edit" 
                                color='#0276c9'
                                size={30}
                                />
                            )}
                            label="Trang chủ"
                            onPress={() => {props.navigation.navigate('Chính')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="google-translate" 
                                color='#0276c9'
                                size={28}
                                />
                            )}
                            label="Góp ý"
                            onPress={() => {props.navigation.navigate('Feedback')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="text-box-search" 
                                color='#0276c9'
                                size={30}
                                />
                            )}
                            label="Từ điển"
                            onPress={() => {props.navigation.navigate('Từ điển')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book-open-page-variant" 
                                color='#0276c9'
                                size={28}
                                />
                            )}
                            label="Từ vựng"
                            onPress={() => {props.navigation.navigate('Vocabulary')}}
                        />
                        {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="heart-flash" 
                                color='#0276c9'
                                size={30}
                                />
                            )}
                            label="Yêu thích"

                        />                   */}
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="align-vertical-bottom" 
                                color='#0276c9'
                                size={30}
                                />
                            )}
                            label="Góp ý"
                            
                        /> 
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="file-question" 
                                color='#0276c9'
                                size={30}
                                />
                            )}
                            label="Hướng dẫn"
                            
                        />       
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.drawerBottomSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <FontAwesome 
                        name="rocket" 
                        color='#0276c9'
                        size={15}
                        />
                    )}
                    label="Product by TMonkey "
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerSection: {
        marginTop: 15
    },
    drawerBottomSection: {
        borderTopColor: '#0276c9',
        borderTopWidth: 2
    }

});