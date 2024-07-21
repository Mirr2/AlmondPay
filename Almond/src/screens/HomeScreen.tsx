import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import UserProfile from '../components/UserProfile';
import Card from '../components/Card';
import CardSuggest from '../components/CardSuggest';

// ParamList를 정의하여 사용할 수도 있습니다.
type ParamList = {
  CardDetails: undefined; // 예시로 CardDetails 스크린이 있다고 가정
};

type HomeScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <UserProfile />
      <View style={styles.separator} />
      <Card navigation={navigation} />
      <View style={styles.separator} />
      <CardSuggest navigation={navigation} />
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
    paddingTop: 90,
    paddingLeft: 20,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    width: '90%',
    marginTop: 0,
    marginLeft: 10,
  }
});

export default HomeScreen;