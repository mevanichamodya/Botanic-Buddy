import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';


const Home = () => {
   
  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.Topic}>Botanic Buddy</Text>
      <Text style={styles.smallText}>Explore the World of Plants with Botanic Buddy.</Text>
      <View style={styles.secondContainer}>
        <View style={styles.lowerContainer1}>
          <View style={styles.lowerContainer2}></View>
        </View>
      </View>
      <View style={styles.imageBackground}></View>
      <Image style={styles.image} source={require('../../assets/image/tree-2750366_1280.png')}/>
      <View style={styles.middleContainer}>
        <View style={styles.middleContainerRow}>
            <TouchableOpacity style={styles.textBox}>
                <View style={styles.circleContainer}>
                    <Image style={styles.icon} source={require('../../assets/icon/icons8-plant-48.png')}/>
                </View>
                <Text style={styles.text}>Plant</Text>
                <Text style={styles.text2}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBox}>
                <View style={styles.circleContainer}>
                    <Image style={styles.icon} source={require('../../assets/icon/icons8-tree-planting-48.png')}/>
                </View>
                <Text style={styles.text}>Plant</Text>
                <Text style={styles.text2}>Care</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.middleContainerRow}>
            <TouchableOpacity style={styles.textBox}>
                <View style={styles.circleContainer}>
                    <Image style={styles.icon} source={require('../../assets/icon/icons8-faq-50.png')}/>
                </View>
                <Text style={styles.text}>FAQ</Text>
                
            </TouchableOpacity>
            <TouchableOpacity style={styles.textBox}>
                <View style={styles.circleContainer}>
                    <Image style={styles.icon} source={require('../../assets/icon/noun-plant-disease-4867974.png')}/>
                </View>
                <Text style={styles.text}>Plant</Text>
                <Text style={styles.text2}>Disease</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A17',
    borderWidth: 4,
    borderColor: '#009A17',
    borderRadius: 20,
    position: 'relative', // Required for absolute positioning inside
  },
  secondContainer: {
    flex: 1,
    backgroundColor: '#009A17',
    justifyContent: 'flex-end',
    position: 'relative', // Required for absolute positioning inside
  },
  lowerContainer1: {
    backgroundColor: '#DDF1D3',
    elevation: 50,
    borderRadius: 20,
    height: '70%',
  },
  lowerContainer2: {
    position: 'absolute',
    top: '10%',
    height: '90%',
    width: '100%',
    backgroundColor: 'white',
    elevation: 50,
    borderRadius: 20,
  },
  Topic: {
    fontFamily: 'Inknut Antiqua',
    justifyContent: 'flex-start',
    margin: 20,
    marginLeft: 5,
    fontWeight: '900',
    fontSize: 34,
    color: 'white',
    textAlign: 'center',
    marginTop: 8,
  },
  smallText: {
    fontFamily: 'Inknut Antiqua',
    fontWeight: '100',
    fontStyle: 'normal',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 2,
    margin:20
  },
  imageBackground: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    top: '20%',
    left: '32%',
    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    //transform: [{ translateX: -50 }, { translateY: -50 }],
    zIndex: 2,
    borderWidth:3,
    borderColor:'#009A17'
  },
  image:{
    ...StyleSheet.absoluteFillObject,
    top: '15%',
    left: '27%',
    width: 190,
    height: 190,
    zIndex: 2,
  },
  middleContainer: {
    ...StyleSheet.absoluteFillObject,
    height: '62%',
    backgroundColor: 'white',
    elevation: 70,
    borderRadius: 20,
    marginTop: 240,
    margin: 20,
    marginBottom: 20,
    zIndex: 1, // Lower zIndex to keep it behind imageBackground
  },
  
  middleContainerRow: {
    flexDirection: 'row',
    //justifyContent:'space-between',
    alignItems: 'center',
  },
  textBox:{
    width:130,
    height:160,
    backgroundColor:'#DDF1D3',
    borderWidth:3,
    borderColor:'#009A17',
    borderRadius:20,
    marginLeft:30,
    marginTop:70,
  },
  circleContainer:{
    width:50,
    height:50,
    top:"15%",
    left:'42%',
    backgroundColor:'white',
    borderRadius: 100,
    //elevation: 100,
  },
  icon:{
    width: 40,
    height: 40,
    top:'4%',
    left:'14%'
  },
  text:{
    fontFamily: 'Inknut Antiqua',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#009A17',
    //textAlign: 'center',
    marginTop:40,
    marginLeft:20
  },
  text2:{
    fontFamily: 'Inknut Antiqua',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#009A17',
    textAlign: 'center',
    //marginTop:40,
    marginLeft:45
  }
});

export default Home;
