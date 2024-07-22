import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type CardProps = {
  navigation: NavigationProp<ParamListBase>;
};

const Card: React.FC<CardProps> = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('내 카드다')}>
      <View style={styles.container}>
        <Text style={styles.text}>내 카드</Text>
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
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  }
});

export default Card;