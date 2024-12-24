import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // Gunakan MaterialCommunityIcons atau lainnya

const ScoreButtons = ({ incrementScore, decrementScore }) => (
  <View
    style={{
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: '100%',
      marginVertical: 10,
    }}
  >
    {/* Tombol tambah skor untuk Tim A */}
    <TouchableOpacity onPress={() => incrementScore('A')} style={{ marginHorizontal: 20 }}>
      <Icon name="plus-circle" size={40} color="#E94560" />
    </TouchableOpacity>
    {/* Tombol kurangi skor untuk Tim A */}
    <TouchableOpacity onPress={() => decrementScore('A')} style={{ marginHorizontal: 20 }}>
      <Icon name="minus-circle" size={40} color="#E94560" />
    </TouchableOpacity>
    {/* Tombol tambah skor untuk Tim B */}
    <TouchableOpacity onPress={() => incrementScore('B')} style={{ marginHorizontal: 20 }}>
      <Icon name="plus-circle" size={40} color="#00C853" />
    </TouchableOpacity>
    {/* Tombol kurangi skor untuk Tim B */}
    <TouchableOpacity onPress={() => decrementScore('B')} style={{ marginHorizontal: 20 }}>
      <Icon name="minus-circle" size={40} color="#00C853" />
    </TouchableOpacity>
  </View>
);

export default ScoreButtons;
