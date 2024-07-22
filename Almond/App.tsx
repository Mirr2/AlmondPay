import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 스크린 컴포넌트를 임포트합니다.
import MenuScreen from './src/screens/MenuScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import SuggestDetailsScreen from './src/screens/SuggestDetailsScreen';
import PayConfirmScreen from './src/screens/PayConfirmScreen';
import PasswordInputScreen from './src/screens/PasswordInputScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="내 카드"
      tabBarOptions={{
        activeTintColor: '#007AFF',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5  // Adjust the margin as needed
        }
      }}
    >
      <Tab.Screen 
        name="메뉴" 
        component={MenuScreen} 
        options={{
          tabBarLabel: '메뉴',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/menu.png')} style={{ width: size, height: size, tintColor: color }} />
          )
        }}
      />
      <Tab.Screen 
        name="내 카드" 
        component={CardDetailsScreen} 
        options={{
          tabBarLabel: '결제',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/pay.png')} style={{ width: 30, height: 30, tintColor: color }} />
          )
        }}
      />
      <Tab.Screen 
        name="카드 추천 서비스" 
        component={SuggestDetailsScreen} 
        options={{
          tabBarLabel: '카드 추천',
          tabBarIcon: ({ color, size }) => (
            <Image source={require('./src/assets/icons/credit-card.png')} style={{ width: size, height: size, tintColor: color }} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS // 슬라이드 업 효과 추가
        }}
      >
        <Stack.Screen name="Home" component={MainTabNavigator} />
        <Stack.Screen name="PaymentConfirmation" component={PayConfirmScreen} options={{ title: '결제 확인' }} />
        <Stack.Screen name="PasswordInput" component={PasswordInputScreen} options={{ title: '패스워드 입력' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;