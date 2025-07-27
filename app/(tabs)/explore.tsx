// Mindfulness Exercises Screen - Focus Enhancement
import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function MindfulnessScreen() {
  const colorScheme = useColorScheme();

  const exercises = [
    {
      id: 1,
      title: 'Breathing Reset',
      description: 'Simple breathing exercise to center your mind',
      duration: '2 min',
      icon: 'refresh-outline',
      benefit: 'Improves mental clarity',
    },
    {
      id: 2,
      title: 'Mindful Breathing',
      description: 'Deep breathing to calm your nervous system',
      duration: '3 min',
      icon: 'leaf-outline',
      benefit: 'Reduces stress',
    },
    {
      id: 3,
      title: 'Focus Enhancement',
      description: 'Train your mind for sustained attention',
      duration: '5 min',
      icon: 'eye-outline',
      benefit: 'Builds concentration',
    },
    {
      id: 4,
      title: 'Mindful Awareness',
      description: 'Develop present-moment awareness',
      duration: '4 min',
      icon: 'power-outline',
      benefit: 'Increases mindfulness',
    },
    {
      id: 5,
      title: 'Attention Training',
      description: 'Strengthen your ability to focus deeply',
      duration: '6 min',
      icon: 'target-outline',
      benefit: 'Enhances focus',
    },
    {
      id: 6,
      title: 'Mental Clarity',
      description: 'Clear mental chatter and find stillness',
      duration: '3 min',
      icon: 'moon-outline',
      benefit: 'Mental clarity',
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Mindfulness</ThemedText>
        <ThemedText type="subtitle">Enhance your focus and awareness</ThemedText>
      </ThemedView>

      {/* Wellness Stats */}
      <ThemedView style={styles.statsContainer}>
        <View style={styles.statRow}>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">12</ThemedText>
            <ThemedText style={styles.statLabel}>Minutes Today</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">+3</ThemedText>
            <ThemedText style={styles.statLabel}>Focus Points</ThemedText>
          </View>
          <View style={styles.statItem}>
            <ThemedText type="defaultSemiBold">60%</ThemedText>
            <ThemedText style={styles.statLabel}>Less Distracted</ThemedText>
          </View>
        </View>
      </ThemedView>

      <ThemedView style={styles.exercisesContainer}>
        <ThemedText type="subtitle">Mindfulness Exercises</ThemedText>
        {exercises.map((exercise) => (
          <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
            <View style={styles.exerciseHeader}>
              <Ionicons name={exercise.icon as any} size={32} color={Colors[colorScheme ?? 'light'].tint} />
              <View style={styles.exerciseInfo}>
                <ThemedText type="defaultSemiBold">{exercise.title}</ThemedText>
                <ThemedText style={styles.description}>{exercise.description}</ThemedText>
                <ThemedText style={styles.benefit}>{exercise.benefit}</ThemedText>
              </View>
              <View style={styles.durationBadge}>
                <ThemedText style={styles.durationText}>{exercise.duration}</ThemedText>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ThemedView>

      {/* Quick Focus Boost */}
      <ThemedView style={styles.quickBoostContainer}>
        <ThemedText type="subtitle">Quick Focus Boost</ThemedText>
        <View style={styles.boostCard}>
          <Ionicons name="flash-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
          <ThemedText type="defaultSemiBold">Need a quick reset?</ThemedText>
          <ThemedText style={styles.boostText}>
            Take three deep breaths: inhale for 4 counts, hold for 4, exhale for 6. This simple practice can immediately improve your focus and reduce stress.
          </ThemedText>
        </View>
      </ThemedView>

      <ThemedView style={styles.tipContainer}>
        <ThemedText type="subtitle">Mindfulness Tip</ThemedText>
        <ThemedText>
          Consistency matters more than duration. Even 2 minutes of daily mindfulness practice can significantly improve your focus and mental clarity over time.
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
  exercisesContainer: {
    padding: 20,
    gap: 16,
  },
  exerciseCard: {
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  exerciseHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  exerciseInfo: {
    flex: 1,
    gap: 4,
  },
  description: {
    fontSize: 14,
    opacity: 0.7,
  },
  benefit: {
    fontSize: 12,
    color: '#4CAF50',
    fontWeight: '600',
  },
  durationBadge: {
    backgroundColor: 'rgba(161, 206, 220, 0.3)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  durationText: {
    fontSize: 12,
    fontWeight: '600',
  },
  quickBoostContainer: {
    padding: 20,
    gap: 12,
  },
  boostCard: {
    padding: 16,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.3)',
    gap: 8,
  },
  boostText: {
    fontSize: 14,
    lineHeight: 20,
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
