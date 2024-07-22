import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { GestureHandlerRootView, PanGestureHandler, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';

type PayConfirmScreenProps = {
  route: {
    params: {
      selectedCardImage: any;
    }
  };
  navigation: NavigationProp<any>;
};

const PayConfirmScreen: React.FC<PayConfirmScreenProps> = ({ route, navigation }) => {
  const { selectedCardImage } = route.params;
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    let interval: any = null;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      navigation.goBack();
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleSwipeDown = (event: PanGestureHandlerGestureEvent) => {
    const { velocityY } = event.nativeEvent;
    if (velocityY > 500) {
      navigation.goBack();
    }
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PanGestureHandler onGestureEvent={handleSwipeDown}>
        <View style={styles.container}>
          <View style={styles.timerContainer}>
            <Image
              source={require('../assets/icons/clock-icon.png')}
              style={styles.icon}
            />
            <Text style={styles.timerText}>{timer}</Text>
            <Text style={styles.instructionText}>카드를 놓는 곳에 대주세요</Text>
          </View>
          <Image
            source={selectedCardImage}
            style={styles.cardImage}
          />
        </View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  timerContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  timerText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  instructionText: {
    fontSize: 16,
    marginTop: 5,
  },
  cardImage: {
    width: 300,
    height: 200,
    resizeMode: 'contain',
  },
  closeButton: {
    backgroundColor: '#ccc',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#000',
  }
});

export default PayConfirmScreen;