import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card, Avatar } from 'react-native-paper';
import { Colors } from '../themes/colors';
import {reportes} from '../screen/Reportes/ScreenHistorial';


// Componente InfoCard
export const InfoCard = ({ icon, title, metric, subtitle, buttonLabel, onPress }) => (
  <Card style={styles.card}>
    <View style={styles.cardheader}>
      <Text style={styles.title}>{title}</Text>
    </View>

    <Card.Content>
      <View style={styles.row}>
        <Avatar.Icon
          icon={icon}
          size={60}
          color={Colors.primaryDark}
          style={[styles.icon, { backgroundColor: 'white' }]}
        />

        <View style={styles.texts}>
          <View style={styles.containeract}>
            <Text style={styles.metric}>{metric}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: Colors.card,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    borderRadius: 50,
  },
  texts: {
    paddingLeft: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: Colors.card,
    fontWeight: 'bold',
    paddingBottom: 5,
  },
  metric: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    marginVertical: 4,
  },
  subtitle: {
    paddingTop: 10,
    fontSize: 15,
    color: Colors.textSecondary,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  containeract: {
    flexDirection: 'row',
    gap: 5,
  },
  cardheader: {
    backgroundColor: Colors.title,
    borderRadius: 5,
    padding: 5,
  },
});
