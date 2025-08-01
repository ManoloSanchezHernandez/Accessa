import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet, Animated } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageSelector() {
  const [image, setImage] = useState(null);
  const [buttonTop, setButtonTop] = useState(new Animated.Value(0));
  const [buttonScale, setButtonScale] = useState(new Animated.Value(1));

  const pickImage = async () => {
    try {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permiso denegado', 'Se necesita acceso a la galería para seleccionar una imagen.');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // Animar movimiento hacia arriba y reducir el tamaño del botón
        Animated.parallel([
          Animated.timing(buttonTop, {
            toValue: -80, // Mover hacia arriba
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.timing(buttonScale, {
            toValue: 0.8, // Escalar
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start();
      }
    } catch (error) {
      console.error('Error al abrir la galería:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedButton, { top: buttonTop, transform: [{ scale: buttonScale }] }]}>
        <Button title="Seleccionar imagen" onPress={pickImage} color="#0A84FF" />
      </Animated.View>
      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animatedButton: {
    position: 'relative',
    marginBottom: 20,
  },

});
