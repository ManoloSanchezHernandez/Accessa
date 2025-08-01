import React from 'react';
import { View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Avatar, Card } from 'react-native-paper';
import { Colors } from '../../themes/colors';
import { ActionCard } from '../../components/ActionCard';
import { InfoCard } from '../../components/InfoCard';

export default function ScreenHome({ navigation }) {
  const usuario = 'Juan Manuel';


  const actions = [
    { icon: 'file-document', title: 'Reportes', subtitle: 'Ver y crear reportes', onPress: () => navigation.navigate('Reportes') },
    { icon: 'qrcode', title: 'Código QR', subtitle: 'Generar invitaciones', onPress: () => navigation.navigate('QR') },
  ];

  const stats = [
    { icon: 'file-document', title: 'Reportes', metric: 3, subtitle: 'Realizados' },
    // { icon: 'alert-octagon', title: 'CodigosQR', metric: 42, subtitle: 'Autorizados' },
    // { icon: 'qrcode', title: 'Panico', metric: 42, subtitle: 'Resueltas' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Header usuario={usuario} />
      <EmergencyCard onPress={() => navigation.navigate('Panico')} />

      <View style={styles.actionsGrid}>
        {actions.map((action, i) => (
          <ActionCard key={i} {...action} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Estadísticas</Text>
      <View style={styles.statsContainer}>
        {stats.map((stat, i) => (
          <InfoCard
            key={i}
            {...stat}
            buttonLabel="Ver detalles"
            onPress={() => navigation.navigate('Historial')}
          />
        ))}
      </View>

      
    </ScrollView>
  );
}

const Header = ({ usuario }) => (
  <View style={styles.header}>
    <Text style={styles.headerTitle}>¡Bienvenido, {usuario}!</Text>
    <Text style={styles.subtitle}>Opciones disponibles</Text>
  </View>
);

const EmergencyCard = ({ onPress }) => (
  <TouchableOpacity style={styles.emergencyCard} onPress={onPress}>
    <Card.Content style={styles.emergencyCardContent}>
      <Avatar.Icon icon="alert" size={60} style={styles.emergencyIcon} />
      <View style={styles.emergencyTextContainer}>
        <Text style={styles.emergencyTitle}>Botón de Emergencia</Text>
      </View>
    </Card.Content>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  header: {
    marginTop: 10,
    marginBottom: 24,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: Colors.title,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.title,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.title,
    marginVertical: 16,
  },
  emergencyCard: {
    borderRadius: 15,
    backgroundColor: Colors.danger,
    marginBottom: 30,
    elevation: 4,
    textAlign: 'center',
  },
  emergencyCardContent: {
    alignItems: 'center',
    padding: 20,
  },
  emergencyIcon: {
    backgroundColor: Colors.danger,
  },
  emergencyTitle: {
    fontSize:15,
    fontWeight: 'bold',
    color: Colors.textOnPrimary,
  },
  actionsGrid: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', // ✅ Esto centra horizontalmente
    marginBottom: 20,
    gap: 20
  },
  statsContainer: {
    padding: 15,
    marginBottom: 100,
    gap: 20,
  },
});
