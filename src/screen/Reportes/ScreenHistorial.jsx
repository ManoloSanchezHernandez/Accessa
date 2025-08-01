import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Modal, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../themes/colors';

export default function ScreenHistorial() {
  const [reportes, setReportes] = useState([
    {
      id: 1,
      title: 'Incidente en Calle Principal',
      time: '15/03/2023 14:30',
      icon: 'report',
      details: {
        tipo: 'Incidente',
        ubicación: 'Calle Principal #123',
        descripción: 'Se reportó un incidente en la zona. El equipo fue alertado.',
        estado: 'Atendido',
      },
    },
    {
      id: 2,
      title: 'Botón de pánico activado',
      time: '08/03/2023 18:20',
      icon: 'warning',
      details: {
        tipo: 'Emergencia',
        ubicación: 'Avenida Central #456',
        tiempoRespuesta: '2 minutos',
        estado: 'Resuelto',
      },
    },
    {
      id: 3,
      title: 'Fallo eléctrico reportado',
      time: '02/03/2023 10:15',
      icon: 'bolt',
      details: {
        tipo: 'Fallo de energía',
        ubicación: 'Edificio B, piso 3',
        comentario: 'El servicio fue restaurado a las 12:00.',
        estado: 'Cerrado',
      },
    },
  ]);

  const [selectedReporte, setSelectedReporte] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleViewDetails = (reporte) => {
    setSelectedReporte(reporte);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Historial de Reportes</Text>

      <ScrollView style={styles.listContainer}>
        {reportes.map((reporte) => (
          <View key={reporte.id} style={styles.item}>
            <View style={styles.itemHeader}>
              <Icon name={reporte.icon} size={24} color={Colors.primary} style={styles.itemIcon} />
              <View style={styles.itemText}>
                <Text style={styles.itemTitle}>{reporte.title}</Text>
                <Text style={styles.itemTime}>{reporte.time}</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.detailsButton} onPress={() => handleViewDetails(reporte)}>
              <Text style={styles.detailsButtonText}>Ver detalles</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Modal de detalles */}
      <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedReporte && (
              <>
                <View style={styles.modalHeader}>
                  <Icon name={selectedReporte.icon} size={28} color={Colors.primary} />
                  <Text style={styles.modalTitle}>{selectedReporte.title}</Text>
                  <Pressable onPress={closeModal} style={styles.closeButton}>
                    <Icon name="close" size={24} color={Colors.textSecondary} />
                  </Pressable>
                </View>

                <ScrollView style={styles.modalBody}>
                  {Object.entries(selectedReporte.details).map(([key, value]) => (
                    <View key={key} style={styles.detailRow}>
                      <Text style={styles.detailLabel}>{key}:</Text>
                      <Text style={styles.detailValue}>{value}</Text>
                    </View>
                  ))}
                </ScrollView>

                <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
                  <Text style={styles.modalButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.title,
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    flex: 1,
  },
  item: {
    backgroundColor: Colors.card,
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  itemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemIcon: {
    marginRight: 15,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: '500',
  },
  itemTime: {
    fontSize: 14,
    color: Colors.textSecondary,
  },
  detailsButton: {
    alignSelf: 'flex-end',
    backgroundColor: Colors.primary,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  detailsButtonText: {
    color: Colors.textOnPrimary,
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: Colors.card,
    borderRadius: 10,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: 10,
  },
  modalTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.title,
    marginLeft: 10,
  },
  closeButton: {
    padding: 5,
  },
  modalBody: {
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  detailLabel: {
    width: '40%',
    fontWeight: 'bold',
    color: Colors.text,
  },
  detailValue: {
    flex: 1,
    color: Colors.textSecondary,
  },
  modalButton: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalButtonText: {
    color: Colors.textOnPrimary,
    fontWeight: 'bold',
  },
});
