import { BackgroundColor } from 'chalk';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { useDispatch } from 'react-redux';
import { logoutUserAction } from '../actions/auth';

const Home = () => {

  const dispatch = useDispatch();
  const handleLogout = () => dispatch(logoutUserAction())
  return (
    <View style={styles.home}>
      <Text>Hey, this is our home page!</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.button}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
})