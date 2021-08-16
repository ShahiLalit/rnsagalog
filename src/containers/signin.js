import React, { useState } from "react";
import { Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { useDispatch } from "react-redux";
import { loginUserAction } from "../actions/auth";

const Signin = ({ navigation }) => {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const handleNavigation = () => {
    navigation.navigate('Signup')
  }

  const dispatch = useDispatch();

  const handleSignin = () => {

    const user = {
      email,
      password
    }

    dispatch(loginUserAction(user));
  }


  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text style={{ textAlign: 'center', marginBottom: 10 }}>Welcome to RN Saga Log</Text>
      <SafeAreaView style={styles.inputArea}>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder={"Enter you email"}
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder={"Enter your password"}
          />
        </View>

        <TouchableOpacity onPress={handleSignin}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>

        <View style={styles.linkText}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={styles.link}>Register here</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  inputBox: { flexDirection: 'row', },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    flex: 1,
    borderRadius: 5
  },
  button: {
    margin: 12,
    backgroundColor: '#427892',
    padding: 10,
    borderRadius: 5,
    textAlign: "center",
    color: '#fff',
    fontWeight: "bold"
  },
  linkText: {
    margin: 12,
    flexDirection: 'row'
  },
  link: {
    marginLeft: 5,
    fontWeight: "bold",
    color: '#427892'
  }
});

export default Signin;