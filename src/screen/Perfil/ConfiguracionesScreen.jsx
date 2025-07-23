import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { Colors } from '../../themes/colors';

export default function ConfiguracionesScreen(){
  // Estados para las configuraciones básicas
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [privacyEnabled, setPrivacyEnabled] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configuración</Text>
      
      {/* Configuración 1: Notificaciones */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Activar notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={setNotificationsEnabled}
          trackColor={{ true: Colors.primary, false: Colors.grayLight }}
          thumbColor={Colors.card}
        />
      </View>
      
      {/* Configuración 2: Modo oscuro */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo oscuro</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={setDarkModeEnabled}
          trackColor={{ true: Colors.primary, false: Colors.grayLight }}
          thumbColor={Colors.card}
        />
      </View>
      
      {/* Configuración 3: Privacidad */}
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo privado</Text>
        <Switch
          value={privacyEnabled}
          onValueChange={setPrivacyEnabled}
          trackColor={{ true: Colors.primary, false: Colors.grayLight }}
          thumbColor={Colors.card}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.title,
    marginBottom: 30,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  settingText: {
    fontSize: 16,
    color: Colors.text,
  },
});

