import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainMenu() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido al Menú Principal</Text>
      {/* Aquí puedes agregar más componentes para tu menú principal */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});