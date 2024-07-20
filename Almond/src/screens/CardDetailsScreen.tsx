// CardDetailsScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardDetailsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>내 카드 정보</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default CardDetailsScreen;