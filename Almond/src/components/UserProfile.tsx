import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// UserProfile 컴포넌트는 사용자의 아이콘과 이름을 화면의 상단 왼쪽에 표시하고 아래에 구분선을 추가합니다.
const UserProfile: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={require('../assets/images/user-avatar.png')} style={styles.avatar} />
        <Text style={styles.name}>USER</Text>
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // 상단 여백
    marginLeft: 20, // 왼쪽 여백
  },
  profileContainer: {
    flexDirection: 'row', // 요소들을 가로로 배열
    alignItems: 'center', // 세로 방향 중앙 정렬
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30, // 원형 아바타 설정
    marginRight: 10, // 아이콘과 이름 사이에 간격 추가
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1, // 구분선 높이
    backgroundColor: '#ccc', // 구분선 색상
    marginTop: 10, // 구분선과 프로필 사이 간격
    width: '100%' // 구분선 폭을 컨테이너 폭과 동일하게 설정
  }
});

export default UserProfile;