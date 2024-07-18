import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { dispatch } from '../../store/reduxStore';
import { login } from '../../store/authSlice';

const Login = () => {
  // State to manage the password input
  const [password, setPassword] = useState('');
  
  // Hardcoded password for login validation
  const hardCodedPw = "login123";

  // Function to handle the login action
  const handleLogin = () => {
    // Check if the password is not empty and matches the hardcoded password
    if (password !== "" && password === hardCodedPw) {
      // Dispatch login action if the password is correct
      dispatch(login());
    }
  }

  return (
    <View style={styles.container}>
      {/* Title for the login screen */}
      <Text style={styles.title}>Todo</Text>
      
      {/* Input container for the password input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      {/* Button to trigger the login action */}
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the components
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
