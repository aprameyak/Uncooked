// Wellness Coach Screen - Professional Guidance
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

type Message = {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
};

export default function CoachScreen() {
  const colorScheme = useColorScheme();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your wellness coach, here to support your mindfulness journey and help you develop healthier digital habits. I can guide you through stress management, focus improvement, and mindful living practices. What would you like to work on today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3001/coach', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(m => ({ role: m.isUser ? 'user' : 'assistant', content: m.text })),
            { role: 'user', content: inputText }
          ]
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const coachMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.reply,
          isUser: false,
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, coachMessage]);
      } else {
        throw new Error('Failed to get response');
      }
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I'm having trouble connecting right now. Please check your internet connection and try again.",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickPrompts = [
    "I want to improve my focus",
    "How can I reduce stress?",
    "Help me develop better habits",
    "I need mindfulness guidance",
    "How do I stay present?",
    "Tips for better sleep",
  ];

  return (
    <View style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Wellness Coach</ThemedText>
        <ThemedText type="subtitle">Professional guidance for your journey</ThemedText>
      </ThemedView>

      {/* Messages */}
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageContainer,
              message.isUser ? styles.userMessage : styles.coachMessage,
            ]}
          >
            <ThemedText style={styles.messageText}>{message.text}</ThemedText>
            <ThemedText style={styles.timestamp}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </ThemedText>
          </View>
        ))}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="small" color={Colors[colorScheme ?? 'light'].tint} />
            <ThemedText style={styles.loadingText}>Coach is thinking...</ThemedText>
          </View>
        )}
      </ScrollView>

      {/* Quick Prompts */}
      {messages.length === 1 && (
        <ThemedView style={styles.promptsContainer}>
          <ThemedText type="subtitle">Common Topics</ThemedText>
          <View style={styles.promptsGrid}>
            {quickPrompts.map((prompt, index) => (
              <TouchableOpacity
                key={index}
                style={styles.promptButton}
                onPress={() => {
                  setInputText(prompt);
                  setTimeout(() => sendMessage(), 100);
                }}
              >
                <ThemedText style={styles.promptText}>{prompt}</ThemedText>
              </TouchableOpacity>
            ))}
          </View>
        </ThemedView>
      )}

      {/* Input */}
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Ask your coach about wellness..."
          placeholderTextColor="#666"
          value={inputText}
          onChangeText={setInputText}
          multiline
          maxLength={500}
        />
        <TouchableOpacity
          style={[styles.sendButton, !inputText.trim() && styles.sendButtonDisabled]}
          onPress={sendMessage}
          disabled={!inputText.trim() || isLoading}
        >
          <Ionicons
            name="send"
            size={20}
            color={inputText.trim() ? Colors[colorScheme ?? 'light'].tint : '#ccc'}
          />
        </TouchableOpacity>
      </ThemedView>
    </View>
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
  messagesContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  messageContainer: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.light.tint,
  },
  coachMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  messageText: {
    fontSize: 16,
    lineHeight: 22,
  },
  timestamp: {
    fontSize: 12,
    opacity: 0.6,
    marginTop: 4,
    alignSelf: 'flex-end',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 12,
    alignSelf: 'flex-start',
  },
  loadingText: {
    fontSize: 14,
    opacity: 0.7,
  },
  promptsContainer: {
    padding: 20,
    gap: 12,
  },
  promptsGrid: {
    gap: 8,
  },
  promptButton: {
    padding: 12,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  promptText: {
    fontSize: 14,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    alignItems: 'flex-end',
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    maxHeight: 100,
    backgroundColor: 'rgba(161, 206, 220, 0.05)',
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(161, 206, 220, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(161, 206, 220, 0.3)',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
}); 