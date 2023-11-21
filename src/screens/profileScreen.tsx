import React from "react";
import { StyleSheet,SafeAreaView,Image,ImageBackground,View,TouchableOpacity,Text, TextInput } from 'react-native';

const Profile=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/image/profile_background.jpg')}
                style={styles.imageBackground}
            >
                <TouchableOpacity style={styles.editIconContainer}>
                    <Image
                        source={require('../../assets/icon/icons8-edit-24.png')}
                        style={styles.editIconImage}
                    />
        </TouchableOpacity>
            </ImageBackground>
            <SafeAreaView style={styles.overlayContainer}>
                <Text style={styles.text}> First Name:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}> Last Name:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}> Email:</Text>
                <TextInput style={styles.input}></TextInput>
                <Text style={styles.text}> Address:</Text>
                <TextInput style={styles.input}></TextInput>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.saveButton}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancelButton} >
                        <Text style={styles.buttonText}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View style={styles.topConatiner}>
                <Image
                    source={require('../../assets/icon/icons8-avatar-64.png')}
                    style={styles.ProfileImage}
                />
      </View>
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
    textContainer: {
        marginTop: 30,
        padding: 20,
    },
    Topic: {
        fontWeight: '900',
        fontSize: 32,
        elevation: 40,
        color: 'white',
        top: '12%',
        left: '34%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#009A17',
        marginBottom: 10,
        margin: 12,
        marginTop: 30,
    },
    input: {
        height: 40,
        borderColor: '#DDF1D3',
        backgroundColor: '#DDF1D3',
        color: 'black',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        marginLeft: 30,
        marginRight: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 35,
    },
    saveButton: {
        backgroundColor: '#009A17',
        padding: 10,
        borderRadius: 20,
        width: 114,
        height: 40,
    },
    cancelButton: {
        backgroundColor: '#009A17',
        padding: 10,
        borderRadius: 20,
        width: 114,
        height: 40,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        left: '24%',
    },
    editIconContainer: {
        position: 'absolute',
        top: '58%',
        right: '10%',
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 30,
        padding: 5,
        elevation: 50,
    },
    editIconImage: {
        width: 20,
        height: 20,
        top: 6,
        left: 5,
    },
    ProfileImage: {
        width: 75,
        height: 75,
        left:3,
        top:'2%'
    },
    topConatiner:{
        ...StyleSheet.absoluteFillObject,
        width:90,
        height:90,
        top:"16%",
        left:'40%',
        backgroundColor:'white',
        borderRadius: 100,
        elevation: 50,
        borderWidth: 5,
        borderColor: '#009A17',
    }
});

export default Profile;
