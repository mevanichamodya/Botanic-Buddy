import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet,View,Text, TouchableOpacity } from 'react-native';

const Onboard=()=>{
  return(
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../../assets/image/sycamore-1469825_1280.jpg')}
        style={styles.imageBackground}
        >
            <View style={styles.topicContainer1}>
                <Text style={styles.Topic}> Botanic</Text>
            </View>
            <View style={styles.topicContainer2}>
                <Text style={styles.Topic}> Buddy</Text>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.SmallText}>Botanic Buddy:Where Nature Meets </Text>
                <Text style={styles.SmallText}> Technology, Cultivating a Greener Tomorrow!  </Text>
            </View>
            <TouchableOpacity style={styles.bottomcontainer}>
                <Text style={styles.bottomText}> GET STARTED</Text>
            </TouchableOpacity>
        </ImageBackground>
    </SafeAreaView>
  );
  
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        borderColor:'#009A17',
        borderWidth:6,
        borderRadius:20,
        overflow:'hidden'
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    topicContainer1: {
        position: 'absolute', 
        //justifyContent:'center',
        left: '22%', 
        //alignItems:'center',
        top:'10%'
    },
    topicContainer2: {
        position: 'absolute', 
        //justifyContent:'center',
        left: '40%', 
        //alignItems:'center',
        top:'16%'
    },
    Topic:{
        fontFamily:'Inknut Antiqua',
        fontWeight:'900',
        fontSize:32,
        elevation:40,
        color:'white'
    },
    textContainer: {
        position: 'absolute', 
        //justifyContent:'center',
        left: '13%', 
        alignItems:'center',
        top:'23%'
    },
    SmallText:{
        fontWeight:'400',
        fontSize:14,
        elevation:40,
        color:'white'
    },
    bottomcontainer:{
        position: 'absolute', 
        justifyContent:'center',
        left: '25%', 
        alignItems:'center',
        bottom:'18%',
        width:190,
        height:40,
        backgroundColor:'#009A17',
        borderRadius:20
    },
    bottomText:{
        fontWeight:'bold',
        fontSize:18,
        elevation:40,
        color:'white'
    }
});
export default Onboard;