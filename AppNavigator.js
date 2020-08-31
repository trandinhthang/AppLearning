import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DetailsScreen from './screens/DetailsScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer  >
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Trang chủ' }} />
        <Stack.Screen name="Translate" options={{ title: 'Từ điển' }} component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;