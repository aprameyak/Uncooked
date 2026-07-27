// Home screen for Uncook app - Digital Wellness Dashboard
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function HomeScreen() {
  const colorScheme = useColorScheme();

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Uncook</ThemedText>
        <HelloWave />
      </ThemedView>
      
      <ThemedText type="subtitle" style={styles.subtitle}>
        Digital wellness companion
      </ThemedText>

      {/* Wellness Stats */}
      <ThemedView style={styles.statsContainer}>
        <ThemedText type="subtitle">Today&apos;s Progress</ThemedText>
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="time-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">2h 15m</ThemedText>
            <ThemedText style={styles.statLabel}>Mindful Time</ThemedText>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="leaf-outline" size={24} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">4</ThemedText>
            <ThemedText style={styles.statLabel}>Wellness Sessions</ThemedText>
          </View>
        </View>
      </ThemedView>

      {/* Wellness Insights */}
      <ThemedView style={styles.insightsContainer}>
        <ThemedText type="subtitle">Wellness Insights</ThemedText>
        <View style={styles.insightCard}>
          <Ionicons name="trending-up-outline" size={32} color={Colors[colorScheme ?? 'light'].tint} />
          <ThemedText type="defaultSemiBold">Improved Focus</ThemedText>
          <ThemedText style={styles.insightText}>
            Your attention span has increased by 25% this week through consistent mindfulness practice.
          </ThemedText>
        </View>
      </ThemedView>

      {/* Quick Actions */}
      <ThemedView style={styles.actionsContainer}>
        <ThemedText type="subtitle">Quick Actions</ThemedText>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="leaf-outline" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Mindfulness</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="timer-outline" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Focus Mode</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Wellness Coach</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="journal-outline" size={32} color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText type="defaultSemiBold">Journal</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>

      {/* Wellness Challenge */}
      <ThemedView style={styles.challengeContainer}>
        <ThemedText type="subtitle">7-Day Wellness Challenge</ThemedText>
        <View style={styles.challengeCard}>
          <ThemedText type="defaultSemiBold">Day 3: Mindful Technology Use</ThemedText>
          <ThemedText style={styles.challengeText}>
            Before using any digital device, take three deep breaths and set an intention for your session.
          </ThemedText>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '43%' }]} />
          </View>
          <ThemedText style={styles.progressText}>3 of 7 days completed</ThemedText>
        </View>
      </ThemedView>

      {/* Daily Tip */}
      <ThemedView style={styles.tipContainer}>
        <ThemedText type="subtitle">Daily Wellness Tip</ThemedText>
        <ThemedText>
          Take a 2-minute breathing break every hour to reset your nervous system and improve focus throughout the day.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  subtitle: {
    marginBottom: 24,
    textAlign: 'center',
  },
  statsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  statLabel: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 4,
  },
  insightsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  insightCard: {
    padding: 16,
    backgroundColor: 'rgba(76, 175, 80, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(76, 175, 80, 0.3)',
    alignItems: 'center',
    gap: 8,
  },
  insightText: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  actionsContainer: {
    gap: 12,
    marginBottom: 24,
  },
  actionButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  actionButton: {
    flex: 1,
    minWidth: '45%',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
    gap: 8,
  },
  challengeContainer: {
    gap: 12,
    marginBottom: 24,
  },
  challengeCard: {
    padding: 16,
    backgroundColor: 'rgba(255, 193, 7, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 193, 7, 0.3)',
    gap: 8,
  },
  challengeText: {
    fontSize: 14,
    lineHeight: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: 'rgba(255, 193, 7, 0.2)',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#FFC107',
  },
  progressText: {
    fontSize: 12,
    textAlign: 'center',
    opacity: 0.7,
  },
  tipContainer: {
    gap: 8,
    padding: 16,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
