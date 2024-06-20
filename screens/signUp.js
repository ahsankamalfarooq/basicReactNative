import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import Checkbox from 'expo-checkbox';
import { useContext } from "react";
import AppContext from '../Context';
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignUp = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const refInputUsername = useRef(null);
  const refInputEmail = useRef(null);
  const refInputPassword = useRef(null);
  const { users } = useContext(AppContext);
  console.log(users[0].title);

  useEffect(() => {
    let myArray = [{ key: 0, title: 'Ali' }, { key: 1, title: 'Khan' }];

    AsyncStorage.getItem('myName').then((data) => {
      console.log("then area");
      console.log("Data retrieved from AsyncStorage:", data);
      if (data !== null) {
        console.log("if area");
        let goodData = JSON.parse(data);
        console.log('My Name is :', goodData[0].title);
      } else {
        console.log("else area");
        AsyncStorage.setItem("myName", JSON.stringify(myArray))
          .then(() => {
            console.log('Data successfully saved in AsyncStorage');
          })
          .catch((error) => {
            console.error('Error saving data to AsyncStorage', error);
          });
      }
    }).catch((error) => {
      console.log("Error", error);
    });
  }, []);

  const signUpBtnPressed = () => {
    console.log('signup Btn Pressed');
    refInputUsername.current.focus();
  };

  const clearAsyncStorage = async () => {
    try {
      await AsyncStorage.clear();
      console.log('AsyncStorage successfully cleared!');
    } catch (error) {
      console.error('Failed to clear AsyncStorage:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up @ {users[0].title}</Text>

      <TextInput
        cursorColor={"darkgrey"}
        style={styles.input}
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        ref={refInputUsername}
      />
      <TextInput
        cursorColor={"darkgrey"}
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        ref={refInputEmail}
      />
      <TextInput
        cursorColor={"darkgrey"}
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        value={password}
        ref={refInputPassword}
      />

      <View style={styles.checkboxContainer}>
        <Checkbox
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.checkboxLabel}>Accept Terms and Conditions</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={signUpBtnPressed}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Button title="Clear AsyncStorage" onPress={clearAsyncStorage} />
    </View>
  );
};

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
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SignUp;
