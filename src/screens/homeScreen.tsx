import React from "react";
import { SafeAreaView, StyleSheet,ImageBackground, Text,Image ,TextInput,View, ScrollView, TouchableOpacity} from "react-native";

const Home=()=>{
    return(
        <SafeAreaView style={styles.container}>
            <ImageBackground
                source={require('../../assets/image/sheets-7722898_1280.jpg')}
                style={styles.backgroundImage}
                imageStyle={styles.backgroundImageStyle}
            >
                <ScrollView style={styles.scrollView}>
                    <Text style={styles.Topic}> Botanic Buddy</Text>
                    <View style={styles.inputContainer}>
                        <Image source={require('../../assets/icon/icons8-search-48.png')} style={styles.searchIcon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Search for plants..."
                        />
                    </View>
                    <View style={styles.imageBox}>
                    <Image
                        source={require('../../assets/image/spring-846051_1280.jpg')}
                        style={styles.coverImage}
                    />
                    </View>

                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={styles.text}>Plant Diseases</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={styles.text}>Care Guide</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.textContainer}>
                        <Text style={styles.text}>FAQ</Text>
                    </TouchableOpacity>
                </ScrollView>
                </ImageBackground>
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({
    container:{
        borderColor:'#009A17',
        borderWidth:6,
        borderRadius:20,
        //backgroundColor:'white',
        flex:1
    },
    Topic:{
        fontFamily:'Inknut Antiqua',
        fontWeight:'900',
        fontSize:34,
        elevation:100,
        color:'#009A17',
        textAlign:'center',
        marginTop:20,
        marginBottom:15
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderColor: '#009A17',
        borderWidth: 2,
        marginBottom: 10,
        width: "75%",
        margin: 20,
        marginLeft: 50,
        borderRadius: 20,
        backgroundColor: '#DDF1D3',
    },
    input: {
        flex: 1,
        height: '100%',
        paddingHorizontal: 10,
    },
    searchIcon: {
        width: 24,
        height: 24,
        margin: 6,
    },
    
    imageBox:{
        height:180,
        width:350,
        borderColor:'#009A17',
        margin:25,
        borderWidth:2,
        borderRadius:20,
        overflow: 'hidden',
        marginBottom:25
    },
    coverImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'transparent', 
      },
 
    textContainer:{
        height:50,
        width:300,
        backgroundColor:'#009A17',
        borderWidth:3,
        borderRadius:20,
        borderColor:'#009A17',
        margin:25,
        marginLeft:52,
        marginTop:20
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        marginTop:5,
        textAlign:'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    backgroundImageStyle: {
        opacity: 0.2, 
    },
});

export default Home;