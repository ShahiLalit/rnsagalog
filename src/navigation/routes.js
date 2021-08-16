import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../containers/home';
import Signin from '../containers/signin';
import Signup from '../containers/signup';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();

const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <ActivityIndicator size="large" color="red" />
  </View>
)

class Routes extends React.Component {
  render() {
    const { loading, userToken } = this.props;
    return (
      <NavigationContainer>
        {loading ?
          <SplashScreen /> :
          <Stack.Navigator>
            {userToken == null ? (
              <>
                <Stack.Screen name="Signin" component={Signin} />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            ) : (
              <>
                <Stack.Screen name="Home" component={Home} />
              </>
            )}


          </Stack.Navigator>}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = state => ({
  userToken: state.login.userToken,
  loading: state.login.loading

})
export default connect(mapStateToProps)(Routes);