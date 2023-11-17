import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const loginScreen = () => {
  return (
    <View style={[styles.main]}>
      <View style={[styles.imagBox]} />
      <View style={[styles.loginBox, {flexDirection: 'column'}]}>
        <View style={[styles.loginHeader]}>
          <View style={[styles.loginHear]}>
            <Text style={[styles.loginMainText]}>Login here</Text>
          </View>
          <View style={[styles.loginText]}>
            <Text style={[styles.loginSubText]}>Welcome back you've</Text>
            <Text style={[styles.loginSubText]}>been missed!</Text>
          </View>
        </View>

        <View style={[styles.loginInput]}>
          <View style={[styles.emailInput]}>
            <Text style={[styles.inputText]}>Email</Text>
          </View>
          <View style={[styles.passwordInput]}>
            <Text style={[styles.inputText]}>Password</Text>
          </View>
          <View style={[styles.signinInput]}>
            <Text style={[styles.signInText]}>Sign In</Text>
          </View>
        </View>
        <View style={[styles.loginButton]}>
          <View style={[styles.newAccTextField]}>
            <Text style={[styles.newAccText]}> Create new account</Text>
          </View>
          <View style={[styles.continueTextField]}>
            <Text style={[styles.continueText]}> Or continue with</Text>
          </View>
          <View style={[styles.buttonField]}>
            <View style={[styles.googleButton]} />
            <View style={[styles.fbButton]} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 0,
    backgroundColor: 'green',
    flexDirection: 'column',
  },

  imagBox: {
    width: '100%',
    height: 400,
    backgroundColor: 'purple',
    position: 'absolute',
  },

  loginBox: {
    flex: 1,
    padding: 10,
    marginTop: 80,
    backgroundColor: 'white',
    borderRadius: 18,
    elevation: 50,
    margin: 30,
  },

  loginHeader: {
    flex: 2,
    backgroundColor: 'white',
    margin: 5,
  },

  loginHear: {
    flex: 1,
    marginTop: 10,
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginMainText: {
    fontSize: 28,
    fontWeight: '900',
    textShadowColor: '#009A17',
    color: '#009A17',
    letterSpacing: 0.6,
  },

  loginText: {
    //flex: 0.6,
    marginTop: 0,
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loginSubText: {
    fontSize: 16,
    color: '#0C0B0B',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1,
  },

  loginInput: {
    flex: 2.7,
    backgroundColor: 'white',
  },

  emailInput: {
    flex: 0.4,
    marginTop: 10,
    backgroundColor: 'white',
    margin: 3,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#009A17',
  },
  passwordInput: {
    flex: 0.4,
    marginTop: 20,
    backgroundColor: 'white',
    margin: 3,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#009A17',
  },
  signinInput: {
    flex: 0.4,
    marginTop: 20,
    backgroundColor: '#009A17',
    margin: 3,
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 10,
    borderWidth: 3,
    borderColor: '#009A17',
  },

  inputText: {
    fontSize: 15,
    color: '#5B5959',
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'left',
    marginLeft: 20,
  },

  signInText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },

  loginButton: {
    flex: 3,
    backgroundColor: 'white',
  },

  newAccTextField: {
    flex: 0.3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  newAccText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    letterSpacing: 0.8,
  },

  continueTextField: {
    flex: 0.3,
    backgroundColor: 'white',
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },

  continueText: {
    fontSize: 16,
    color: '#FF0505',
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },

  buttonField: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    marginTop: 10,
    display: 'flex',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleButton: {
    width: 70,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 9,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#009A17',
  },

  fbButton: {
    width: 70,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 9,
    elevation: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#009A17',
  },
});

export default loginScreen;
