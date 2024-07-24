
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import PostAPIHooks from '../APIHooks/PostAPIHooks';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInAnonymously, onAuthStateChanged } from 'firebase/auth';

export default function Login() {
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');

  const navigation = useNavigation();
  const { data, signup } = PostAPIHooks();

  const loginBtnPressed = () => {
    const url = '';
    const params = {
      email: 'abc@gmail.com',
      password: '12345',
      display_name: 'abc'
    };

    const headers = {
      'Content-Type': 'application/json'
    };

    axios.post(url, params, { headers })
      .then(res => {
        console.log("I am success = ", res.data);
      })
      .catch(err => {
        console.log("This is the Error ==", err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Screen!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUsername}
        value={username}
        placeholder='User Name'
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        placeholder='Password'
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={loginBtnPressed}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Button
        title='Go to Home'
        onPress={() => navigation.navigate('signUp')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
























