import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Colors } from '../../themes/colors';

export default function DatosScreen() {
  const personalData = {
    nombre: 'Pedro Pony Venancio Segundo de la Cruz',
    domicilio: 'Casa 10, calle Colombia',
    correo: 'PedroPony@gmail.com',
    telefono: '9842565810',
    contraseña: '**********'
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Datos personales</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Pedro Pony</Text>
      </View>
      
      <DataField label="Nombre" value={personalData.nombre} />
      <DataField label="Domicilio" value={personalData.domicilio} />
      <DataField label="Correo" value={personalData.correo} />
      <DataField label="Teléfono" value={personalData.telefono} />
      <DataField label="Contraseña" value={personalData.contraseña} isPassword />
    </ScrollView>
  );
};

const DataField = ({ label, value, isPassword = false }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          editable={false}
          secureTextEntry={isPassword}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.title,
    marginBottom: 30,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.text,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: Colors.textSecondary,
    marginBottom: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: Colors.borderInput,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: Colors.card,
  },
  input: {
    height: 40,
    color: Colors.text,
    fontSize: 16,
  },
});

