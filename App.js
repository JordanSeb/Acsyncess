import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, ActivityIndicator } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import MainMenu from './src/js/MainMenu';

const Stack = createStackNavigator();

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log(email, password);

    setTimeout(() => {
      setLoading(false);
      navigation.navigate('MainMenu');
    }, 2000)
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/userIcon.jpeg')} style={styles.logo} />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry
        autoCapitalize="none"
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} color="#4CAF50" />
      </View>
      {loading && <ActivityIndicator size="large" color="#4CAF50" />}
    </View>
  );
}


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Inicio de sesión" component={Login} />
          <Stack.Screen name="MainMenu" component={MainMenu} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    marginTop: 20,
  },
});