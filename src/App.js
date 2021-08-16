import React from 'react';
import {
  Text,
  View,
} from 'react-native';
import Routes from './navigation/routes';
import * as NavigationService from './services/nav';

export default class App extends React.Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }
  render() {
    return (
      <Routes ref={nav => {
        this.navigator = nav;
      }} />

    );
  }
}
