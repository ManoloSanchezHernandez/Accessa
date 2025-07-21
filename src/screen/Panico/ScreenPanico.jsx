import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Animated,
  Easing,
} from 'react-native';
import { Colors } from '../../themes/colors';

export default function ScreenPanico() {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      useNativeDriver: true,
      duration: 120,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 6,
    }).start();
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      style={{ backgroundColor: Colors.background }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Botón de Emergencia</Text>
        <Text style={styles.subtitle}>Presiona solo en situaciones reales</Text>

        <Animated.View style={{ transform: [{ scale }] }}>
          <TouchableOpacity
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
            activeOpacity={0.9}
            style={styles.panicButton}
          >
            <Text style={styles.panicText}>SOS</Text>
            <Text style={styles.panicSubText}>Emergencia</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>Al presionar este botón:</Text>
          <Text style={styles.infoBullet}>• Se enviará tu ubicación</Text>
          <Text style={styles.infoBullet}>• Se alertará a tus contactos</Text>
          <Text style={styles.infoBullet}>• Se puede activar una alarma</Text>
          <Text style={styles.infoNote}>⚠️ Úsalo solo en emergencias reales.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 36,
    textAlign: 'center',
    color: Colors.textSecondary,
  },
  panicButton: {
    width: 260,
    height: 260,
    borderRadius: 130,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.danger,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 12,
  },
  panicText: {
    color: Colors.textOnPrimary,
    fontSize: 48,
    fontWeight: 'bold',
    letterSpacing: 4,
    textShadowColor: 'rgba(0,0,0,0.2)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  panicSubText: {
    color: Colors.textOnPrimary,
    fontSize: 16,
    marginTop: 6,
    opacity: 0.9,
  },
  infoBox: {
    marginTop: 40,
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 24,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 6,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  infoBullet: {
    fontSize: 15,
    marginVertical: 2,
    color: Colors.textSecondary,
  },
  infoNote: {
    marginTop: 16,
    fontSize: 13,
    fontStyle: 'italic',
    color: Colors.textSecondary,
  },
});
