import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const images = [
  require('../assets/images/amex.jpeg'),
  require('../assets/images/chai.png'),
];

const descriptions = [
  "Amex Card: 특별한 혜택을 경험하세요.",
  "Chai Card: 더욱 빠르고 쉬운 결제.",
];

const windowWidth = Dimensions.get('window').width;

const SuggestDetailsScreen: React.FC = () => {
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
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>{descriptions[selectedIndex]}</Text>
      </View>
      <View style={styles.imageContainer}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={setSelectedIndexEvent}
          ref={scrollViewRef}
        >
          {images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={styles.image}
              resizeMode="contain"
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.dotView}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, { opacity: index === selectedIndex ? 1 : 0.5 }]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  descriptionContainer: {
    width: windowWidth - 40,
    height: 200,
    padding: 20,
    marginBottom: 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#595959',
    alignItems: 'center',
  },
  descriptionText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    width: windowWidth,
    height: 250,
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth,
    height: '90%',
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

export default SuggestDetailsScreen;