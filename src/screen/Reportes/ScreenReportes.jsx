import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Colors } from '../../themes/colors';
import Picker from '../../components/Picker';
import ImageSelector from '../../components/ImageSelector';

export default function ScreenReportes() {
  const [tipoProblema, setTipoProblema] = useState(null);
  const [ubicacion, setUbicacion] = useState(null);

  return (
    <ScrollView
      style={{ backgroundColor: Colors.background }}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Describa el problema a reportar</Text>  

        <View style={styles.card}>
          <Text style={styles.label}>Descripción del problema:</Text>
          <TextInput
            style={styles.input}
            placeholder="Describe detalladamente el problema"
            placeholderTextColor={Colors.gray}
            multiline
            numberOfLines={4}
          />

          <Picker
            label="Tipo de problema"
            options={['Robo', 'Vandalismo', 'Accidente', 'Otro']}
            selectedValue={tipoProblema}
            onSelect={setTipoProblema}
          />

          <Picker
            label="Ubicación del incidente"
            options={['Calle 1', 'Calle 2', 'Edificio A', 'Otro']}
            selectedValue={ubicacion}
            onSelect={setUbicacion}
          />

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Adjuntar evidencia:</Text>
            <TouchableOpacity style={styles.attachmentButton} activeOpacity={0.7}>
              <ImageSelector/>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.submitButton} activeOpacity={0.85}>
          <Text style={styles.submitButtonText}>Enviar Reporte</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 40,
    marginBottom:40
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
    color: Colors.textPrimary,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 24,
    color: Colors.textPrimary,
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
    minHeight: 100,
    textAlignVertical: 'top',
    marginBottom: 20,
    color: Colors.textPrimary,
    fontSize: 15,
  },
  fieldGroup: {
    marginBottom: 20,
  },
  selector: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    backgroundColor: Colors.card,
    padding: 14,
  },
  selectorText: {
    fontSize: 15,
    color: Colors.gray,
  },
  attachmentButton: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    padding: 14,
    alignItems: 'center',
    borderStyle: 'dashed',
    backgroundColor: Colors.highlight,
  },
  attachmentText: {
    fontSize: 15,
    fontWeight: '600',
    color: Colors.primary,
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
    marginBottom:100
  },
  submitButtonText: {
    color: Colors.textOnPrimary,
    fontSize: 16,
    fontWeight: '600',
  },
});