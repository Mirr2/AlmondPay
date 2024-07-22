import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

// 카드와 설명 데이터
const images = [
  require('../assets/images/amex.jpeg'),
  require('../assets/images/chai.png'),
];

const descriptions = [
  "Amex 카드 3302",
  "Chai 카드 7510"
];

const windowWidth = Dimensions.get('window').width;

type CardDetailsScreenProps = {
  navigation: NavigationProp<ParamListBase>;
};

const CardDetailsScreen: React.FC<CardDetailsScreenProps> = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const scrollViewRef = useRef(null);
  
    const setSelectedIndexEvent = (event) => {
      const viewSize = event.nativeEvent.layoutMeasurement.width;
      const contentOffset = event.nativeEvent.contentOffset.x;
      const index = Math.floor(contentOffset / viewSize);
      setSelectedIndex(index);
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{descriptions[selectedIndex]}</Text>
        <View style={styles.imageContainer}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={setSelectedIndexEvent}
            ref={scrollViewRef}
          >
            {images.map((image, index) => (
              <ImageBackground
                key={index}
                source={image}
                style={styles.image}
                resizeMode="contain"
                imageStyle={{ opacity: 0.5 }}
              >
                <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PasswordInput', { selectedCardImage: images[selectedIndex] })}>
                <Text style={styles.buttonText}>결제하기</Text>
                </TouchableOpacity>
                  <TouchableOpacity style={styles.qrButton}>
                    <Text style={styles.buttonText}>QR 결제</Text>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            ))}
          </ScrollView>
        </View>
        <View style={styles.dotView}>
          {images.map((_, index) => (
            <View key={index} style={[styles.dot, { opacity: index === selectedIndex ? 1 : 0.5 }]} />
          ))}
        </View>
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
    marginBottom: 20,
  },
  imageContainer: {
    width: windowWidth,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 140,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  qrButton: {
    width: 140,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dotView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  dot: {
    height: 10,
    width: 10,
    backgroundColor: '#595959',
    borderRadius: 5,
    margin: 8,
  }
});

export default CardDetailsScreen;