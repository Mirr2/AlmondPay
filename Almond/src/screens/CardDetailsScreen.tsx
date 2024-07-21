import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

const images = [
  require('../assets/images/amex.jpeg'),
  require('../assets/images/chai.png'),
];

const windowWidth = Dimensions.get('window').width;

const CardDetailsScreen: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const setSelectedIndexEvent = (event) => {
    // 가로 길이와 스크롤된 위치를 사용하여 현재 페이지 인덱스 계산
    const viewSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffset / viewSize);
    setSelectedIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>내 카드 내역</Text>
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