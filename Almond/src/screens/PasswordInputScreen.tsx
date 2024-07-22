import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

type Props = {
  navigation: NavigationProp<any>;
  route: {
    params: {
      selectedCardImage: any;
    }
  };
};

const PasswordInputScreen: React.FC<Props> = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [keypad, setKeypad] = useState<any[]>([]);

  useEffect(() => {
    generateKeypad();
  }, []);

  const generateKeypad = () => {
    let numbers = Array.from({ length: 10 }, (_, i) => i); // Include 0-9
    numbers.sort(() => Math.random() - 0.5); // Shuffle numbers
    numbers.splice(Math.floor(Math.random() * (numbers.length - 1)), 0, 'logo'); // Insert logo at a random position, not at the last
    numbers.push('delete'); // Ensure delete is always at the end
    setKeypad(numbers);
  };

  const handleKeyPress = (key: any) => {
    if (key === 'delete') {
      setPassword(prev => prev.slice(0, -1)); // Delete last character
    } else if (typeof key === 'number' && password.length < 6) {
      const updatedPassword = password + key.toString();
      setPassword(updatedPassword);
      if (updatedPassword.length === 6) {
        verifyPassword(updatedPassword); // Automatically verify when 6 digits are entered
      }
    }
  };

  const verifyPassword = (pwd: string) => {
    if (pwd === '111111') {
      navigation.navigate('PaymentConfirmation', { selectedCardImage: route.params.selectedCardImage });
    } else {
      Alert.alert('오류', '잘못된 패스워드입니다.');
      setPassword(''); // Clear password on failure
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prompt}>결제 비밀번호 입력</Text>
      <View style={styles.dotsContainer}>
        {Array.from({ length: 6 }, (_, i) => (
          <View key={i} style={[styles.dot, { backgroundColor: i < password.length ? '#000' : '#ccc' }]} />
        ))}
      </View>
      <View style={styles.keypad}>
        {keypad.map((key, index) => (
          <TouchableOpacity key={index} style={styles.keypadButton} onPress={() => handleKeyPress(key)}>
            {key === 'logo' ? (
              <Image source={require('../assets/icons/logo.png')} style={styles.logo} />
            ) : key === 'delete' ? (
              <Image source={require('../assets/icons/delete.png')} style={styles.logo} />
            ) : (
              <Text style={styles.keypadText}>{key}</Text>
            )}
          </TouchableOpacity>
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
    padding: 20,
    backgroundColor: '#fff',
  },
  prompt: {
    fontSize: 18,
    marginBottom: 15,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  dot: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    margin: 5,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  keypadButton: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  keypadText: {
    fontSize: 24,
  },
  logo: {
    width: 30,
    height: 30,
  }
});

export default PasswordInputScreen;