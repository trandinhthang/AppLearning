import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NetInfo from "@react-native-community/netinfo";

class Network extends Component {
    NetInfoSubcribtion = null;
    constructor(props) {
        super(props);
        this.state = {  
            connection_status: false,  
        }
    }

    componentDidMount() {
        this.NetInfoSubcribtion = NetInfo.addEventListener(
            this._handleConnectivityChange,
        );
    }

    compomentWillDidmount() {
        this.NetInfoSubcribtion && this.NetInfoSubcribtion();
    }

    _handleConnectivityChange = (state) => {
        this.setState( { connection_status: state.isConnected })
    }

    render() {
        return (
            <View>
                <Text> Kết nối thành công ? { this.state.connection_status ? "Thành công" : "Không thành công"} </Text>
            </View>
        )
    }
}
export default Network;