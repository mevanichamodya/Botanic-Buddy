import React,{useEffect, useState} from "react";
import { SafeAreaView,FlatList,ActivityIndicator,StyleSheet,ImageBackground, Text,Image ,TextInput,View, ScrollView, TouchableOpacity} from "react-native";

interface Species {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name?: string[];
    cycle: string;
    watering: string;
    sunlight: string[]; 
    default_image: {
      image_id: number;
      license: number;
      license_name: string;
      license_url: string;
      original_url: string;
      regular_url: string;
      medium_url: string;
      small_url: string;
      thumbnail: string;
    };
}
const SpeciesList: React.FC<{ data: Species[] }> = ({ data }) => {
    const renderItem = ({ item }: { item: Species }) => (
      <View style={styles.itemContainer}>
        <Text>{item.common_name}</Text>
      </View>
    );
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
      />
    );
};

const Home=()=>{
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState<Species[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const fetchData = async () => {
        try {
          setLoading(true);
          setError('');
    
          const response = await fetch('https://perenual.com/api/species-list?key=sk-q8Fu65615b74c59a52467');
    
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
    
          const result = await response.json();
    
          if (result.data && Array.isArray(result.data)) {
            const filteredResults = result.data.filter((species: Species) =>
              species.common_name.toLowerCase().includes(searchTerm.toLowerCase())
            );
    
            setSearchResults(filteredResults);
          } else {
            throw new Error('Unexpected data format in the API response');
          }
        } catch (error) {
          console.error('Error:', error);
          setError('An error occurred while fetching data.');
        } finally {
          setLoading(false);
        }
    };
    useEffect(() => {
        if (searchTerm.trim() !== '') {
          fetchData();
        } else {
          setSearchResults([]);
        }
    }, [searchTerm]);


    return(
        <SafeAreaView style={styles.container}>
            
                <ScrollView style={styles.scrollView}>
                    
                    <View style={styles.search}>
                        <View style={styles.inputContainer}>
                            
                            <TextInput
                                style={styles.input}
                                placeholder="Search for plants..."
                                value={searchTerm}
                                onChangeText={(text) => setSearchTerm(text)}
                            />
                           {/* {searchTerm !== '' && (
                                <TouchableOpacity onPress={() => setSearchTerm('')}>
                                    <Image source={require('../../assets/icon/icons8-cancel-48.png')} style={styles.cancelIcon} />
                                </TouchableOpacity>
                           )}*/}
                        </View>
                        {loading ? (
                            <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />
                            ) : error ? (
                            <Text>{error}</Text>
                            ) : (


<SpeciesList data={searchResults} />
                            )}
                    </View>
                    
                    
                </ScrollView>
                
        </SafeAreaView>
    );
};
const styles=StyleSheet.create({
    container:{
        borderColor:'#009A17',
        borderWidth:6,
        //borderRadius:20,
        //backgroundColor:'white',
        flex:1
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
        marginLeft: 30,
        borderRadius: 10,
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
    loader: {
        marginTop: 20,
    },
    imageBox:{
        height:180,
        width:350,
        borderColor:'#009A17',
        margin:20,
        marginLeft:16,
        borderWidth:2,
        borderRadius:20,
        overflow: 'hidden',
        marginBottom:25,
        
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
        marginLeft:44,
        marginTop:20
    },
    text:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        marginTop:5,
        textAlign:'center'
    },
   
    backgroundImageStyle: {
        opacity: 0.2, 
    },
    itemContainer: {
        marginBottom: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    search: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    cancelIcon: {
        width: 24,
        height: 24,
        margin: 10,
    },
});

export default Home;