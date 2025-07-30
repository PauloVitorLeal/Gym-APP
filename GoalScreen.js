import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

export default function GoalScreen({ navigation, route }) {
  const { email } = route.params;
  const [selectedGoal, setSelectedGoal] = useState(null);

  const goals = [
    { key: 'lose_weight', label: 'Lose Weight' },
    { key: 'build_muscle', label: 'Build Muscle' },
    { key: 'stay_fit', label: 'Stay Fit' },
  ];

  const handleNext = () => {
    if (!selectedGoal) return;
    if (selectedGoal === 'lose_weight') {
      navigation.navigate('WeightHeight', { email, goal: selectedGoal });
    } else {
      // For other goals, just alert for now
      alert(`Goal selected: ${selectedGoal}. Training sessions will be added later.`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is your goal?</Text>
      {goals.map((goal) => (
        <TouchableOpacity
          key={goal.key}
          style={[
            styles.goalButton,
            selectedGoal === goal.key && styles.selectedGoalButton,
          ]}
          onPress={() => setSelectedGoal(goal.key)}
        >
          <Text
            style={[
              styles.goalButtonText,
              selectedGoal === goal.key && styles.selectedGoalButtonText,
            ]}
          >
            {goal.label}
          </Text>
        </TouchableOpacity>
      ))}
      <Button title="Next" onPress={handleNext} disabled={!selectedGoal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center',
  },
  goalButton: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 5,
    marginBottom: 15,
  },
  selectedGoalButton: {
    backgroundColor: '#007AFF',
  },
  goalButtonText: {
    color: '#007AFF',
    textAlign: 'center',
    fontSize: 18,
  },
  selectedGoalButtonText: {
    color: '#fff',
  },
});
