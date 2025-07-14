import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

type JournalEntry = {
  mood: string;
  note: string;
  date: string;
};

const JournalScreen = () => {
  const [mood, setMood] = useState('');
  const [note, setNote] = useState('');
  const [entries, setEntries] = useState<JournalEntry[]>([]);

  const handleSave = () => {
    setEntries([...entries, { mood, note, date: new Date().toISOString() }]);
    setMood('');
    setNote('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood & Attention Journal</Text>
      <TextInput
        style={styles.input}
        placeholder="How are you feeling?"
        value={mood}
        onChangeText={setMood}
      />
      <TextInput
        style={styles.input}
        placeholder="Notes (optional)"
        value={note}
        onChangeText={setNote}
      />
      <Button title="Save Entry" onPress={handleSave} />
      <Text style={styles.subtitle}>Recent Entries:</Text>
      {entries.slice(-5).reverse().map((entry, idx) => (
        <View key={idx} style={styles.entry}>
          <Text>{entry.date.split('T')[0]}: {entry.mood} {entry.note && `- ${entry.note}`}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 16 },
  subtitle: { marginTop: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 12 },
  entry: { marginTop: 8, padding: 8, backgroundColor: '#f5f5f5', borderRadius: 6 },
});

export default JournalScreen; 