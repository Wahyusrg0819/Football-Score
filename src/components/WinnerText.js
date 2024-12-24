import React from 'react';
import { Text, View } from 'react-native';
import { Animated } from 'react-native';

const WinnerText = ({ winner }) => {
  if (!winner) return null;

  const animation = new Animated.Value(1);

  // Efek zoom in-out
  Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 1.2,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <View style={{ alignItems: 'center', marginTop: 20 }}>
      <Animated.Text
        style={{
          transform: [{ scale: animation }],
          fontSize: 30,
          fontWeight: 'bold',
          color: '#FFD700', // Warna emas
          textAlign: 'center',
          textShadowColor: '#000',
          textShadowOffset: { width: 2, height: 2 },
          textShadowRadius: 4,
        }}
      >
        🎉 {winner} 🎉
      </Animated.Text>
      <Text
        style={{
          fontSize: 20,
          color: '#FF69B4', // Warna merah muda cerah
          marginTop: 10,
          fontStyle: 'italic',
        }}
      >
        Selamat atas kemenangannya!
      </Text>
    </View>
  );
};

export default WinnerText;
