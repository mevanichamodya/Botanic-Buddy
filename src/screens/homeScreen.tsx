import React from "react";
import { SafeAreaView, StyleSheet, Text,Image ,TextInput,View} from "react-native";

const Home=()=>{
    return(
        <SafeAreaView style={styles.container}>
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
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({
    container:{
        flex:1,
        borderColor:'#009A17',
        borderWidth:6,
        borderRadius:20,
    },
    Topic:{
        fontFamily:'Inknut Antiqua',
        fontWeight:'900',
        fontSize:32,
        elevation:40,
        color:'#009A17',
        alignItems:'center',
        left:'20%',
        marginTop:20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 40,
        borderColor: '#DDF1D3',
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
        height:140,
        width:280,
        borderColor:'#009A17',
        elevation:200,
        margin:20,
        marginLeft:65,
        borderWidth:2,
        borderRadius:20,
        overflow: 'hidden'
    },
    coverImage: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
    },

});

export default Home;