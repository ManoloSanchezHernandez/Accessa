import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Colors } from '../../themes/colors';

export default function GenerateQRScreen() {
  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Generar código QR</Text>

        <Text style={styles.subtitle}>
          Rellena el formulario de acuerdo a la información de su invitado
        </Text>

        <View style={styles.card}>
          {/* Nombre */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Nombre del invitado</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa el nombre del invitado"
              placeholderTextColor={Colors.gray}
            />
          </View>

          {/* Teléfono */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Teléfono</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingresa el número de teléfono"
              placeholderTextColor={Colors.gray}
              keyboardType="phone-pad"
            />
          </View>

          {/* Fecha */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Fecha</Text>
            <TouchableOpacity style={styles.input} activeOpacity={0.7}>
              <Text style={styles.placeholderText}>Hora estimada de llegada</Text>
            </TouchableOpacity>
          </View>

          {/* Motivo */}
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Motivo</Text>
            <TextInput
              style={[styles.input, { minHeight: 80, textAlignVertical: 'top' }]}
              placeholder="Ingresa el motivo de la visita"
              placeholderTextColor={Colors.gray}
              multiline
            />
          </View>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.submitButton} activeOpacity={0.85}>
          <Text style={styles.submitButtonText}>Solicitar código QR</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 24,
    textAlign: 'center',
  },
  card: {
    backgroundColor: Colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 4,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: Colors.textPrimary,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.card,
    padding: 14,
    fontSize: 15,
    color: Colors.textPrimary,
  },
  placeholderText: {
    fontSize: 15,
    color: Colors.gray,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 20,
  },
  submitButton: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    backgroundColor: Colors.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  submitButtonText: {
    color: Colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});
