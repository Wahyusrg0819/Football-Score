import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native'; // Tambahkan TouchableOpacity di sini
import ScoreCard from './src/components/ScoreCard';
import ScoreButtons from './src/components/ScoreButtons';
import WinnerText from './src/components/WinnerText';
import { styles } from './src/styles/appStyles';

const App = () => {
  const [teamA, setTeamA] = useState({ name: 'Tim A', score: 0 });
  const [teamB, setTeamB] = useState({ name: 'Tim B', score: 0 });

  const incrementScore = (team) => {
    if (team === 'A') {
      setTeamA({ ...teamA, score: teamA.score + 1 });
    } else {
      setTeamB({ ...teamB, score: teamB.score + 1 });
    }
  };

  const decrementScore = (team) => {
    if (team === 'A' && teamA.score > 0) {
      setTeamA({ ...teamA, score: teamA.score - 1 });
    } else if (team === 'B' && teamB.score > 0) {
      setTeamB({ ...teamB, score: teamB.score - 1 });
    }
  };

  const resetScores = () => {
    setTeamA({ ...teamA, score: 0 });
    setTeamB({ ...teamB, score: 0 });
  };

  const checkWinner = () => {
    if (teamA.score >= 10) return `${teamA.name} Menang!`;
    if (teamB.score >= 10) return `${teamB.name} Menang!`;
    return null;
  };

  return (
    <View style={styles.container}>
      <ScoreCard teamA={teamA} teamB={teamB} />
      <ScoreButtons 
        incrementScore={incrementScore}
        decrementScore={decrementScore} 
      />
      <TouchableOpacity onPress={resetScores} style={styles.resetButton}>
        <Text style={styles.resetButtonText}>Reset</Text>
      </TouchableOpacity>
      <WinnerText winner={checkWinner()} />
    </View>
  );
};

export default App;
