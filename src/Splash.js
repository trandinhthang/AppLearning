import React, { Component } from 'react';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';

class Splash extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <LottieView
                    source={require('../assests/animation/loading.json')}
                    autoPlay
                    loop={false}
                    speed={2}
                    onAnimationFinish={() => {
                        this.props.navigation.replace('App')
                    }}
                />
            </View>

        );
    }
}

export default Splash;