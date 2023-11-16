import React from 'react';
import {StyleSheet, View} from 'react-native';

const loginScreen = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.loginBox, {flexDirection: 'column'}]}>
        <View style={[styles.loginHeader]}>
          <View style={[styles.loginHear]} />
          <View style={[styles.loginText]} />
        </View>

        <View style={[styles.loginInput]}>
          <View style={[styles.emailInput]} />
          <View style={[styles.passwordInput]} />
          <View style={[styles.signinInput]} />
        </View>
        <View style={[styles.loginButton]}>
          <View style={[styles.newAccText]} />
          <View style={[styles.continueText]} />
          <View style={[styles.googleButton]} />
          <View style={[styles.fbButton]} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    backgroundColor: 'green',
    flexDirection: 'column',
  },

  loginBox: {
    flex: 1,
    //padding: 10,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 18,
    elevation: 50,
  },

  loginHeader: {
    flex: 3,
    backgroundColor: 'black',
    margin: 10,
  },

  loginHear: {
    flex: 0.8,
    marginTop: 30,
    backgroundColor: 'yellow',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginText: {
    flex: 0.6,
    marginTop: 2,
    backgroundColor: 'orange',
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginInput: {
    flex: 4.3,
    backgroundColor: 'pink',
    margin: 2,
  },

  emailInput: {
    flex: 0.4,
    marginTop: 20,
    backgroundColor: 'black',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 30,
  },
  passwordInput: {
    flex: 0.4,
    marginTop: 20,
    backgroundColor: 'black',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 30,
  },
  signinInput: {
    flex: 0.4,
    marginTop: 20,
    backgroundColor: 'black',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 30,
  },

  loginButton: {
    flex: 3,
    backgroundColor: 'blue',
    margin: 10,
  },

  newAccText: {
    flex: 0.3,
    backgroundColor: 'gray',
  },

  continueText: {
    flex: 0.3,
    backgroundColor: 'red',
    marginTop: 40,
  },

  googleButton: {
    width: 65,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 7,
    elevation: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
  },

  fbButton: {
    width: 65,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 7,
    elevation: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 3,
  },
});

export default loginScreen;
