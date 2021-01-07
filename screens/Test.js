// import React,{useState} from 'react'
// import { View, Text,Modal, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// export default function Test() {
//     const [modalOpen, setModalOpen] = useState(false);
//     return (
//         <View >
//             <Text>Helllllloooooo</Text>
//             <Modal visible={modalOpen} animationType='slide'>
//                 <View style={styles.modalToggle}>
//                     <Text>Hello</Text>

//                 </View>
//                 <Icon name='arrow-right' size={20} onPress={ () => setModalOpen(false)}/>
//             </Modal>
//             <Icon name='arrow-left' size={20} onPress={ () => setModalOpen(true)}/>
//         </View>
       
//     )
// }
// const styles = StyleSheet.create({
//     modalToggle: {
//         marginBottom: 10,
//         borderColor:"red",
//         borderWidth:2,
//         padding:10,
//         borderRadius:10,
//         alignSelf:'center'
//     }
// })
import React, {useState} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';

const Test = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 500);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Modal
        animationType="slide"
        transparent
        visible={modalVisible}
        onRequestClose={() => {
          console.log('Modal has been closed.');
        }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            backgroundColor: 'gray',
            justifyContent: 'center',
            margin: 25,
          }}>
          <Text style={{fontSize: 16, color: 'white'}}>
            This modal will close in Five Seconds..
          </Text>
        </View>
      </Modal>

      <TouchableHighlight
        onPress={() => {
          showModal();
        }}>
        <Text>Show Modal</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Test;
