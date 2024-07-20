import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            headerLeft: () => (
              <Image
                source={require('./src/assets/icons/logo.png')}
                style={{ width: 90, height: 90, marginLeft: 10 }}
              />
            ),
            headerTitle: '', // 타이틀을 비워둠
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen name="CardDetails" component={CardDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;