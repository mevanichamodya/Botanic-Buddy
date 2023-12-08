/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  Alert,
} from 'react-native';
import ToastContainer, {
  ToastOptions,
  useToast,
} from 'react-native-toast-notifications';
import auth from '@react-native-firebase/auth';

const loginScreen = () => {
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handlingError = () => {
    if (!email) {
      setEmailError('Email required');
    }
    if (!password) {
      setPasswordError('Password required');
    } else {
      loginWithEmailAndPass();
    }
  };

  const loginWithEmailAndPass = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res);
        toast.show('Login successful!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email) && email !== '') {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.length < 6 && password !== '') {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail();
    validatePassword();

    if (emailError === '' && passwordError === '') {
      console.log('Login successful');
    } else {
      console.log('Login faield. Please try again');
    }
  };

  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView
          contentContainerStyle={styles.main}
          keyboardShouldPersistTaps="handled">
          <View style={[styles.main]}>
            <View>
              <Image
                source={require('../../assets/image/leaves-318743_1280.jpg')}
                style={[styles.imagBox]}
              />
            </View>
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
                  <TextInput
                    style={[styles.inputText]}
                    placeholder="Email"
                    onChangeText={text => setEmail(text)}
                    onBlur={validateEmail}
                  />
                </View>
                <View style={[styles.errorText]}>
                  {emailError !== '' && (
                    <Text
                      style={{
                        color: 'red',
                      }}>
                      {' '}
                      {emailError}
                    </Text>
                  )}
                </View>
                <View style={[styles.passwordInput]}>
                  <TextInput
                    style={[styles.inputText]}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    onBlur={validatePassword}
                  />
                </View>

                <View style={[styles.errorText]}>
                  {passwordError !== '' && (
                    <Text style={{color: 'red'}}>{passwordError}</Text>
                  )}
                </View>
                <View style={[styles.signinInput]}>
                  <TouchableOpacity
                    style={styles.signInButton}
                    onPress={handlingError}>
                    <Text style={styles.signInText}>Sign In</Text>
                  </TouchableOpacity>
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
                  <TouchableOpacity style={[styles.googleButton]}>
                    <Image
                      source={require('../../assets/icon/icons8-google-22.png')}
                      style={[styles.icon]}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.fbButton]}>
                    <Image
                      source={require('../../assets/icon/icons8-facebook-48.png')}
                      style={[styles.icon]}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 0,
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  imagBox: {
    width: '100%',
    height: 380,
    backgroundColor: 'white',
    position: 'absolute',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  loginBox: {
    width: 'auto',
    height: 'auto',
    padding: 10,
    paddingBottom: 25,
    marginTop: 130,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 15,
    margin: 30,
  },

  loginHeader: {
    width: '100%',
    height: 150,
    backgroundColor: 'white',
    margin: 5,
  },

  loginHear: {
    width: '100%',
    height: 'auto',
    marginTop: 20,
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
    width: '100%',
    height: 100,
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
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    backgroundColor: 'white',
  },

  emailInput: {
    width: '97%',
    height: 56,
    //flex: 0.4,
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 2,
    borderWidth: 3,
    borderColor: '#009A17',
    //marginBottom: 20,
  },
  passwordInput: {
    width: '97%',
    height: 56,
    // flex: 0.4,
    marginTop: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 2,
    borderWidth: 3,
    borderColor: '#009A17',
  },
  signinInput: {
    width: '97%',
    height: 50,
    // flex: 0.4,
    marginTop: 30,
    justifyContent: 'center',
    borderRadius: 50,
    borderColor: '#009A17',
    // borderWidth: 1,
  },

  signInButton: {
    backgroundColor: '#009A17',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 50,
  },

  signInText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },
  inputText: {
    fontSize: 20,
    color: '#5B5959',
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'left',
    marginLeft: 20,
  },

  errorText: {
    width: '100%',
    height: 15,
    backgroundColor: 'white',
    marginTop: 10,
    display: 'flex',
    marginLeft: 20,
    textAlign: 'left',
  },

  loginButton: {
    width: '100%',
    height: 'auto',
    backgroundColor: 'rgba(255, 0, 0, 0)',
  },

  newAccTextField: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgba(255, 0, 0, 0)',
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
    width: '100%',
    height: 60,
    backgroundColor: 'rgba(255, 0, 0, 0)',
    display: 'flex',
    // marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
    //backgroundColor: 'rgba(255, 0, 0, 0)',
    // marginTop: 10,
    display: 'flex',
    // margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleButton: {
    width: 62,
    height: 41,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#009A17',
  },

  fbButton: {
    width: 62,
    height: 41,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    borderWidth: 2,
    borderColor: '#009A17',
  },

  icon: {
    width: 26,
    height: 26,
    alignItems: 'center',
  },
});

export default loginScreen;
function then(arg0: (res: any) => void) {
  throw new Error('Function not implemented.');
}
