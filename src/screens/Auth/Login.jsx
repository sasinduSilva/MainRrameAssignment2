import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Provider, useSelector } from "react-redux";
import { dispatch } from '../../store/reduxStore';
import { login } from '../../store/authSlice';

const Login = () => {
  const [password, setPassword] = useState('');
  const hardCodedPw = "login123";

  const handleLogin = () =>{

    if(password != "" && password == hardCodedPw){
          dispatch(
            login()
          );     
    }

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#e0e0e0',
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: 'mediumseagreen',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Login;
