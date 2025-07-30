import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

export default function WeightHeightScreen({ navigation, route }) {
  const { email, goal } = route.params;
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = () => {
    if (!weight || !height) {
      Alert.alert('Error', 'Please enter both weight and height');
      return;
    }
    // For now, just alert the collected data
    Alert.alert(
      'Info',
      `Email: ${email}\nGoal: ${goal}\nWeight: ${weight}\nHeight: ${height}\nTraining sessions will be added later.`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your weight and height</Text>
      <TextInput
        style={styles.input}
        placeholder="Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <Button title="Submit" onPress={handleSubmit} />
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
  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
