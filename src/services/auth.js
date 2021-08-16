import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from 'react-native';

const getUsers = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('users')
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    Alert.alert("Oops! there is some problem. Please try again.")
  }
}

const storeUsers = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('users', jsonValue)
  } catch (e) {
    Alert.alert("Oops! there is some problem. Please try again.")
  }
}

export const registerUserService = async (request) => {
  const users = await getUsers();
  users.push(request.user)
  storeUsers(users);
  return { userToken: request.user.email }
};

export const loginUserService = async (request) => {
  const { email, password } = request.user;
  let users = await getUsers();
  const savedUser = users.find(user => user.email === email && user.password === password);
  if (!savedUser) {
    Alert.alert("User not found!");
    return;
  }
  Alert.alert(`You are signed in with ${savedUser.email}`)
  return { userToken: email }
};

export const logoutUserService = async (request) => {
  Alert.alert(`You are logged out - ${savedUser.email}`)
  return { userToken: null }
};