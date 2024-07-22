import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// 스크린 컴포넌트를 임포트합니다.
import MenuScreen from './src/screens/MenuScreen';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import SuggestDetailsScreen from './src/screens/SuggestDetailsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 메인 탭 네비게이터 생성
function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="내 카드" // '내 카드' 화면을 시작 화면으로 설정
    >
      <Tab.Screen name="메뉴" component={MenuScreen} options={{ tabBarLabel: '메뉴' }} />
      <Tab.Screen name="내 카드" component={CardDetailsScreen} options={{ tabBarLabel: '결제' }} />
      <Tab.Screen name="카드 추천 서비스" component={SuggestDetailsScreen} options={{ tabBarLabel: '카드 추천' }} />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={MainTabNavigator} // 스택 내에 메인 탭 네비게이터 포함
          options={{
            headerLeft: () => (
              <Image
                source={require('./src/assets/icons/logo.png')}
                style={{ width: 90, height: 90, marginLeft: 10 }}
              />
            ),
            headerTitle: '', // 타이틀을 비워둠
            headerTitleAlign: 'center',
            headerShown: false // 탭 네비게이션 때 헤더 숨기기
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;