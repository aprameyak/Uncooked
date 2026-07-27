// Focus Mode Screen - Mindfulness Training
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function FocusScreen() {
  const colorScheme = useColorScheme();
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState(25);

  const focusSessions = [
    { id: 1, duration: 15, label: 'Quick Focus', description: '15 min mindfulness session' },
    { id: 2, duration: 25, label: 'Deep Focus', description: '25 min sustained attention' },
    { id: 3, duration: 45, label: 'Extended Focus', description: '45 min concentration training' },
    { id: 4, duration: 90, label: 'Mindful Work', description: '90 min uninterrupted focus' },
  ];

  const formatTime = (minutes: number) => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Focus Mode</ThemedText>
        <ThemedText type="subtitle">Train your mind for sustained attention</ThemedText>
      </ThemedView>

      {/* Focus Stats */}
      <ThemedView style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">+8</ThemedText>
            <ThemedText style={styles.statLabel}>Focus Minutes</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">3</ThemedText>
            <ThemedText style={styles.statLabel}>Sessions Today</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">70%</ThemedText>
            <ThemedText style={styles.statLabel}>Less Distracted</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Timer Display */}
      <ThemedView style={styles.timerContainer}>
        <ThemedText type="title" style={styles.timerText}>
          {formatTime(selectedDuration)}
        </ThemedText>
        <TouchableOpacity 
          style={[styles.timerButton, isTimerRunning && styles.timerButtonActive]}
          onPress={() => setIsTimerRunning(!isTimerRunning)}
        >
          <Ionicons 
            name={isTimerRunning ? 'pause' : 'play'} 
            size={32} 
            color={Colors[colorScheme ?? 'light'].tint} 
          />
          <ThemedText type="defaultSemiBold">
            {isTimerRunning ? 'Pause Session' : 'Start Session'}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>

      {/* Session Types */}
      <ThemedView style={styles.sessionsContainer}>
        <ThemedText type="subtitle">Focus Sessions</ThemedText>
        <View style={styles.sessionsGrid}>
          {focusSessions.map((session) => (
            <TouchableOpacity 
              key={session.id} 
              style={[
                styles.sessionCard,
                selectedDuration === session.duration && styles.sessionCardActive
              ]}
              onPress={() => setSelectedDuration(session.duration)}
            >
              <ThemedText type="defaultSemiBold">{session.label}</ThemedText>
              <ThemedText style={styles.sessionDuration}>{session.duration} min</ThemedText>
              <ThemedText style={styles.sessionDescription}>{session.description}</ThemedText>
            </TouchableOpacity>
          ))}
        </View>
      </ThemedView>

      {/* Focus Tips */}
      <ThemedView style={styles.tipsContainer}>
        <ThemedText type="subtitle">Focus Tips</ThemedText>
        <View style={styles.tipsGrid}>
          <View style={styles.tipCard}>
            <Ionicons name="phone-portrait-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Minimize Distractions</ThemedText>
            <ThemedText style={styles.tipText}>Put your phone in another room during focus sessions</ThemedText>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="leaf-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Take Mindful Breaks</ThemedText>
            <ThemedText style={styles.tipText}>Use breaks for breathing exercises, not scrolling</ThemedText>
          </View>
          <View style={styles.tipCard}>
            <Ionicons name="eye-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Single Task Focus</ThemedText>
            <ThemedText style={styles.tipText}>Do one thing at a time, fully present</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Progress Tracking */}
      <ThemedView style={styles.progressContainer}>
        <ThemedText type="subtitle">Focus Progress</ThemedText>
        <View style={styles.progressCard}>
          <ThemedText type="defaultSemiBold">Week 1: Building Focus</ThemedText>
          <ThemedText style={styles.progressText}>
            You&apos;re successfully building focus stamina through consistent practice. Your mind is developing better concentration habits.
          </ThemedText>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <ThemedText style={styles.progressLabel}>75% of weekly goal completed</ThemedText>
        </View>
      </ThemedView>

      {/* Focus Tips */}
      <ThemedView style={styles.tipContainer}>
        <ThemedText type="subtitle">Focus Enhancement Tip</ThemedText>
        <ThemedText>
          Every minute you spend in focused attention strengthens your concentration. Regular practice builds neural pathways for sustained focus and mental clarity.
        </ThemedText>
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
  timerContainer: {
    padding: 20,
    alignItems: 'center',
    gap: 20,
  },
  timerText: {
    fontSize: 48,
    fontWeight: 'bold',
  },
  timerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  timerButtonActive: {
    backgroundColor: 'rgba(161, 206, 220, 0.3)',
  },
  sessionsContainer: {
    padding: 20,
    gap: 16,
  },
  sessionsGrid: {
    gap: 12,
  },
  sessionCard: {
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  sessionCardActive: {
    backgroundColor: 'rgba(161, 206, 220, 0.3)',
    borderColor: Colors.light.tint,
  },
  sessionDuration: {
    fontSize: 14,
    opacity: 0.7,
    marginTop: 4,
  },
  sessionDescription: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
  },
  tipsContainer: {
    padding: 20,
    gap: 16,
  },
  tipsGrid: {
    gap: 12,
  },
  tipCard: {
    padding: 16,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.3)',
    gap: 8,
  },
  tipText: {
    fontSize: 12,
    opacity: 0.7,
  },
  progressContainer: {
    padding: 20,
    gap: 12,
  },
  progressCard: {
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
    gap: 8,
  },
  progressText: {
    fontSize: 14,
    lineHeight: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressLabel: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
  tipContainer: {
    margin: 20,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
    gap: 8,
  },
}); 