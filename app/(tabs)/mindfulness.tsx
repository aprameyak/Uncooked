import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const MindfulnessScreen = () => {
  const [step, setStep] = useState(0);
  const steps = [
    'Sit comfortably and close your eyes.',
    'Take a deep breath in... (4 seconds)',
    'Hold your breath... (4 seconds)',
    'Exhale slowly... (4 seconds)',
    'Repeat for 1-3 minutes.',
    'Well done! You completed a mindful breathing exercise.'
  ];

  const nextStep = () => setStep(Math.min(step + 1, steps.length - 1));
  const reset = () => setStep(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mindful Breathing</Text>
      <Text style={styles.instruction}>{steps[step]}</Text>
      <View style={styles.row}>
        <Button title="Next" onPress={nextStep} disabled={step === steps.length - 1} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  instruction: { fontSize: 18, marginBottom: 24, textAlign: 'center' },
  row: { flexDirection: 'row', gap: 16 },
});

export default MindfulnessScreen; 