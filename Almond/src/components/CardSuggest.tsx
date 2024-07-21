// CardSuggest.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type CardSuggestProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CardSuggest: React.FC<CardSuggestProps> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('카드 추천 서비스')}>
      <View style={styles.container}>
        <Text style={styles.text}>카드 추천 서비스</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: '#ffffff', // 배경색 설정
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold', // 글자 굵기
    color: '#333', // 글자색
  }
});

export default CardSuggest;