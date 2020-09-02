import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TranslateScreen from './screens/TranslateScreen';
import VocabularyScreen from './screens/VocabularyScreen';
import GrammarScreen from './screens/GrammarScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
            headerTitleAlign:'center',
            headerStyle: {
              backgroundColor: '#f4511e',//màu nền
            },
            headerTintColor: '#fff',//màu nút mũi tên
            headerTitleStyle: {
            fontWeight: 'bold',//nét chữ
          },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Translate"  options={{ title: 'Từ Điển' }} component={TranslateScreen} /> 
        <Stack.Screen name="Vocabulary" options={{ title: 'Từ Vựng' }} component={VocabularyScreen} /> 
        <Stack.Screen name="Grammar" options={{ title: 'Ngữ Pháp' }} component={GrammarScreen} /> 
        {/* <Stack.Screen name="Details" options={({ route }) => ({ title: route.params.name })} component={DetailsScreen} />  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;