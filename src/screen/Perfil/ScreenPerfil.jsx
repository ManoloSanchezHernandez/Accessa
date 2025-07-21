import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes/colors';

export default function ProfileScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={styles.title}>Perfil</Text>
      </View>

      <View style={styles.userCard}>
        <View style={styles.avatar}>
          <Icon name="person" size={60} color="white" />
        </View>
        <Text style={styles.userName}>Pedro Pony</Text>
        <Text style={styles.userEmail}>pedro.pony@ejemplo.com</Text>
      </View>

      <View style={styles.menuCard}>
        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <View style={styles.menuItemContent}>
            <Icon name="person-outline" size={24} color={Colors.primary} style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Datos personales</Text>
          </View>
          <Icon name="chevron-right" size={24} color={Colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <View style={styles.menuItemContent}>
            <Icon name="notifications-none" size={24} color={Colors.primary} style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Notificaciones</Text>
          </View>
          <Icon name="chevron-right" size={24} color={Colors.gray} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} activeOpacity={0.7}>
          <View style={styles.menuItemContent}>
            <Icon name="settings" size={24} color={Colors.primary} style={styles.menuIcon} />
            <Text style={styles.menuItemText}>Configuraciones</Text>
          </View>
          <Icon name="chevron-right" size={24} color={Colors.gray} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} activeOpacity={0.85}>
        <Text style={styles.logoutButtonText}>CERRAR SESIÓN</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.textPrimary,
    textAlign: 'center',
  },
  userCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.textPrimary,
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: Colors.textSecondary,
  },
  menuCard: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    marginHorizontal: 24,
    marginBottom: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
  },
  menuItem: {
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  menuItemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 16,
  },
  menuItemText: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: Colors.danger,
    borderRadius: 10,
    paddingVertical: 18,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  logoutButtonText: {
    color: Colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
});
