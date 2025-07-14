import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const FOCUS_DURATION = 25 * 60; // 25 minutes
const BREAK_DURATION = 5 * 60; // 5 minutes

const FocusScreen = () => {
  const [seconds, setSeconds] = useState(FOCUS_DURATION);
  const [active, setActive] = useState(false);
  const [onBreak, setOnBreak] = useState(false);

  React.useEffect(() => {
    if (!active) return;
    if (seconds === 0) {
      setActive(false);
      setOnBreak(!onBreak);
      setSeconds(onBreak ? FOCUS_DURATION : BREAK_DURATION);
      return;
    }
    const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
    return () => clearTimeout(timer);
  }, [active, seconds, onBreak]);

  const start = () => setActive(true);
  const reset = () => {
    setActive(false);
    setOnBreak(false);
    setSeconds(FOCUS_DURATION);
  };

  const format = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{onBreak ? 'Mindful Break' : 'Focus Mode'}</Text>
      <Text style={styles.timer}>{format(seconds)}</Text>
      <Text style={styles.motivation}>{onBreak ? 'Take a mindful break!' : 'Stay focused, you got this!'}</Text>
      <View style={styles.row}>
        <Button title={active ? 'Pause' : 'Start'} onPress={active ? () => setActive(false) : start} />
        <Button title="Reset" onPress={reset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  timer: { fontSize: 48, fontWeight: 'bold', marginBottom: 16 },
  motivation: { fontSize: 18, marginBottom: 24 },
  row: { flexDirection: 'row', gap: 16 },
});

export default FocusScreen; 