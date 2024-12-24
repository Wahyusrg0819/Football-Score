import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../styles/appStyles';

const ScoreCard = ({ teamA, teamB }) => (
  <View style={styles.scoreCardContainer}>
    {/* Tim A */}
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamA.name}</Text>
      <Text style={styles.teamScore}>{teamA.score}</Text>
    </View>

    {/* Divider */}
    <View style={styles.divider}>
      <Text style={styles.vsText}>VS</Text>
    </View>

    {/* Tim B */}
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamB.name}</Text>
      <Text style={styles.teamScore}>{teamB.score}</Text>
    </View>
  </View>
);

export default ScoreCard;
