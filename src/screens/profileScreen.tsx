import React from "react";
import { StyleSheet,SafeAreaView,ImageBackground } from 'react-native';

const Profile=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/image/profile_background.jpg')}
                style={styles.imageBackground}
            >
            </ImageBackground>
            <SafeAreaView style={styles.overlayContainer}>

            </SafeAreaView>
      </SafeAreaView>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        borderColor: '#009A17',
        borderWidth: 6,
        borderRadius: 20,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1 / 4,
        resizeMode: 'cover',
    },
    overlayContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        borderRadius: 20,
        top: '22%',
        elevation: 50,
    },
    
});

export default Profile;
