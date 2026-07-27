// Journal Screen - Wellness Tracking
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function JournalScreen() {
  const colorScheme = useColorScheme();
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [journalEntry, setJournalEntry] = useState('');

  const moods = [
    { id: 1, emoji: '😊', label: 'Focused', color: '#4CAF50' },
    { id: 2, emoji: '🙂', label: 'Present', color: '#8BC34A' },
    { id: 3, emoji: '😐', label: 'Distracted', color: '#FFC107' },
    { id: 4, emoji: '😔', label: 'Scattered', color: '#FF9800' },
    { id: 5, emoji: '😢', label: 'Stressed', color: '#F44336' },
  ];

  const attentionLevels = [
    { id: 1, label: 'Deep Focus', description: 'Sustained concentration' },
    { id: 2, label: 'Easily Distracted', description: 'Hard to stay on task' },
    { id: 3, label: 'Mind Wandering', description: 'Thoughts drift constantly' },
    { id: 4, label: 'Mental Fog', description: 'Difficulty concentrating' },
  ];

  const recentEntries = [
    { id: 1, date: 'Today', mood: '😊', entry: 'Had a great morning mindfulness session. Feeling more centered and focused throughout the day.' },
    { id: 2, date: 'Yesterday', mood: '😐', entry: 'Struggled with focus today. Too many distractions and notifications interrupting my flow.' },
    { id: 3, date: '2 days ago', mood: '🙂', entry: 'Completed a 25-minute focus session without any interruptions. Feeling accomplished!' },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Wellness Journal</ThemedText>
        <ThemedText type="subtitle">Track your mindfulness journey</ThemedText>
      </ThemedView>

      {/* Wellness Stats */}
      <ThemedView style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">7</ThemedText>
            <ThemedText style={styles.statLabel}>Days Consistent</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">+15</ThemedText>
            <ThemedText style={styles.statLabel}>Focus Minutes</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">80%</ThemedText>
            <ThemedText style={styles.statLabel}>Less Distracted</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Mood Selection */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">How&apos;s your focus today?</ThemedText>
        <View style={styles.moodContainer}>
          {moods.map((mood) => (
            <TouchableOpacity
              key={mood.id}
              style={[
                styles.moodButton,
                selectedMood === mood.id && styles.moodButtonSelected,
                { borderColor: mood.color }
              ]}
              onPress={() => setSelectedMood(mood.id)}
            >
              <ThemedText style={styles.moodEmoji}>{mood.emoji}</ThemedText>
              <ThemedText style={styles.moodLabel}>{mood.label}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      {/* Journal Entry */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">How did your mindfulness practice go?</ThemedText>
        <TextInput
          style={styles.journalInput}
          placeholder="Write about your focus, mindfulness practice, or any insights..."
          placeholderTextColor="#666"
          multiline
          numberOfLines={4}
          value={journalEntry}
          onChangeText={setJournalEntry}
        />
        <TouchableOpacity style={styles.saveButton}>
          <ThemedText style={styles.saveButtonText}>Save Entry</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Attention Tracking */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Attention Quality</ThemedText>
        <View style={styles.attentionContainer}>
          {attentionLevels.map((level) => (
            <TouchableOpacity key={level.id} style={styles.attentionButton}>
              <ThemedText type="defaultSemiBold">{level.label}</ThemedText>
              <ThemedText style={styles.attentionDescription}>{level.description}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      {/* Wellness Milestones */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Wellness Milestones</ThemedText>
        <View style={styles.milestonesContainer}>
          <View style={styles.milestoneCard}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <ThemedText type="defaultSemiBold">Day 1: Mindfulness Practice</ThemedText>
            <ThemedText style={styles.milestoneText}>Completed first mindfulness session</ThemedText>
          </View>
          <View style={styles.milestoneCard}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <ThemedText type="defaultSemiBold">Focus Breakthrough</ThemedText>
            <ThemedText style={styles.milestoneText}>Read for 30 minutes without checking phone</ThemedText>
          </View>
          <View style={[styles.milestoneCard, styles.milestonePending]}>
            <Ionicons name="time-outline" size={24} color="#FFC107" />
            <ThemedText type="defaultSemiBold">Week of Consistency</ThemedText>
            <ThemedText style={styles.milestoneText}>7 days of daily mindfulness practice</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Recent Entries */}
      <ThemedView style={styles.section}>
        <ThemedText type="subtitle">Recent Entries</ThemedText>
        <View style={styles.entriesContainer}>
          {recentEntries.map((entry) => (
            <View key={entry.id} style={styles.entryCard}>
              <View style={styles.entryHeader}>
                <ThemedText style={styles.entryDate}>{entry.date}</ThemedText>
                <ThemedText style={styles.entryMood}>{entry.mood}</ThemedText>
              </View>
              <ThemedText style={styles.entryText}>{entry.entry}</ThemedText>
            </View>
          ))}
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    alignItems: 'center',
    gap: 8,
  },
  statsContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  statItem: {
    alignItems: 'center',
    gap: 4,
  },
  statLabel: {
    fontSize: 12,
    opacity: 0.7,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    gap: 16,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 12,
  },
  moodButton: {
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: 'transparent',
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    minWidth: 60,
  },
  moodButtonSelected: {
    backgroundColor: 'rgba(161, 206, 220, 0.3)',
  },
  moodEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  moodLabel: {
    fontSize: 12,
    textAlign: 'center',
  },
  journalInput: {
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
    borderRadius: 12,
    padding: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    backgroundColor: 'rgba(161, 206, 220, 0.05)',
  },
  saveButton: {
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  attentionContainer: {
    gap: 8,
  },
  attentionButton: {
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
    gap: 4,
  },
  attentionDescription: {
    fontSize: 12,
    opacity: 0.7,
  },
  milestonesContainer: {
    gap: 12,
  },
  milestoneCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },
  milestonePending: {
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderColor: 'rgba(255, 193, 7, 0.3)',
  },
  milestoneText: {
    fontSize: 12,
    opacity: 0.7,
    flex: 1,
  },
  entriesContainer: {
    gap: 12,
  },
  entryCard: {
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  entryDate: {
    fontSize: 12,
    opacity: 0.6,
  },
  entryMood: {
    fontSize: 20,
  },
  entryText: {
    fontSize: 14,
    lineHeight: 20,
  },
}); 