import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const signupScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView
        contentContainerStyle={styles.signUpMain}
        keyboardShouldPersistTaps="handled">
        <View style={[styles.signUpMain]}>
          <View>
            <Image
              source={require('../../assets/image/leaves-318743_1280.jpg')}
              style={[styles.signupImg]}
            />
          </View>
          <View style={[styles.signupBox, {flexDirection: 'column'}]}>
            <View style={[styles.signupHeadBox]}>
              <View style={[styles.signupHeader]}>
                <Text style={[styles.signupHeaderText]}> Create Account </Text>
              </View>
              <View style={[styles.signupSubHeader]}>
                <Text style={[styles.signupSubHeaderText]}>
                  Create an account so you can
                </Text>
                <Text style={[styles.signupSubHeaderText]}>
                  explore all the plant
                </Text>
              </View>
            </View>
            <View style={[styles.signupTextFieldBox]}>
              <View style={[styles.signupField]}>
                <TextInput style={[styles.userNameText]}>User name</TextInput>
              </View>
              <View style={[styles.signupField]}>
                <TextInput style={[styles.userNameText]}>Email</TextInput>
              </View>
              <View style={[styles.signupField]}>
                <TextInput style={[styles.userNameText]}>Password</TextInput>
              </View>
              <View style={[styles.signupField]}>
                <TextInput style={[styles.userNameText]}>
                  Confirm password
                </TextInput>
              </View>
              <View style={[styles.signupField]}>
                <TouchableOpacity style={[styles.signupButton]}>
                  <Text style={[styles.signupText]}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.signup_fb_google_ButtonBox]}>
              <View style={[styles.bottomSubTextBox]}>
                <Text style={[styles.bottomSubText]}>
                  Already have an account
                </Text>
              </View>
              <View style={[styles.continueField]}>
                <Text style={[styles.continueFieldText]}>
                  {' '}
                  Or continue with
                </Text>
              </View>
              <View style={[styles.buttonField]}>
                <TouchableOpacity style={[styles.googleFbButton]}>
                  <Image
                    source={require('../../assets/icon/icons8-google-22.png')}
                    style={[styles.icon]}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={[styles.googleFbButton]}>
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
  );
};

const styles = StyleSheet.create({
  signUpMain: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },

  signupImg: {
    width: '100%',
    height: 380,
    backgroundColor: 'aqua',
    position: 'absolute',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  signupBox: {
    width: 'auto',
    height: 650,
    padding: 15,
    paddingBottom: 25,
    marginTop: 110,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 15,
    margin: 30,
  },

  signupHeadBox: {
    width: '100%',
    height: 125,
    backgroundColor: 'white',
  },

  signupHeader: {
    width: '100%',
    height: 50,
    marginTop: 20,
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupHeaderText: {
    fontSize: 28,
    fontWeight: '900',
    textShadowColor: '#009A17',
    color: '#009A17',
    letterSpacing: 0.6,
  },

  signupSubHeader: {
    width: '100%',
    height: 50,
    marginTop: 0,
    marginBottom: 0,
    backgroundColor: 'white',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  signupSubHeaderText: {
    fontSize: 16,
    color: '#0C0B0B',
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 1,
  },

  signupTextFieldBox: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 360,
    backgroundColor: 'white',
  },

  signupField: {
    width: '97%',
    height: 50,
    //flex: 0.4,
    marginTop: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    borderRadius: 50,
    elevation: 2,
    borderWidth: 3,
    borderColor: '#009A17',
  },

  userNameText: {
    fontSize: 15,
    color: '#5B5959',
    fontWeight: '500',
    letterSpacing: 0.5,
    textAlign: 'left',
    marginLeft: 20,
  },

  signupButton: {
    backgroundColor: '#009A17',
    height: '100%',
    justifyContent: 'center',
    borderRadius: 50,
  },
  signupText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },

  signup_fb_google_ButtonBox: {
    width: '100%',
    //height: 100,
    backgroundColor: 'white',
  },

  bottomSubTextBox: {
    width: '100%',
    height: 20,
    backgroundColor: 'white',
    display: 'flex',
    // marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomSubText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
    letterSpacing: 0.8,
  },

  continueField: {
    width: '100%',
    height: 35,
    backgroundColor: 'white',
    display: 'flex',
    // marginTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  continueFieldText: {
    fontSize: 16,
    color: '#FF0505',
    fontWeight: 'bold',
    letterSpacing: 0.8,
  },

  buttonField: {
    width: '100%',
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  googleFbButton: {
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

  icon: {
    width: 26,
    height: 26,
    alignItems: 'center',
  },
});

export default signupScreen;