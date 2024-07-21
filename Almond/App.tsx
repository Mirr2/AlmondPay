import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 스크린 컴포넌트를 임포트합니다.
import HomeScreen from './src/screens/HomeScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import SuggestDetailsScreen from './src/screens/SuggestDetailsScreen';


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
        <Stack.Screen name="내 카드" component={CardDetailsScreen} />
        <Stack.Screen name="카드 추천 서비스" component={SuggestDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;