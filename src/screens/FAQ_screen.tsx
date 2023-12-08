import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ImageBackground } from 'react-native';
import DropDownPicker, { ItemType } from 'react-native-dropdown-picker';

interface FaqData {
  questions: string[];
  answers: string[];
}

const YourComponent: React.FC = () => {
  const [faqData, setFaqData] = useState<FaqData>({ questions: [], answers: [] });
  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const requestOptions: RequestInit = {
        method: 'GET',
        redirect: 'follow',
      };

      const response = await fetch(
        'https://perenual.com/api/article-faq-list?key=sk-vrI56560d5432d2582877&page=1',
        requestOptions
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result: FaqData = await response.json();
      setFaqData(result);
    } catch (error: any) {
      console.error('Error:', error.message);
      // Set an empty array for questions to avoid undefined error
      setFaqData({ questions: [], answers: [] });
    }
  };

  const handleQuestionChange = (value: number) => {
    setSelectedQuestionIndex(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('C:/Users/DILHARA/Downloads/dilharaFAQ/FAQscreen/assets/BackGround.jpg')}
        style={styles.backgroundImage}
      >
        
          <Text style={styles.faqText}>FAQ</Text>
        
      </ImageBackground>
      <View style={styles.square}>
        <DropDownPicker
          items={(faqData.questions || []).map((question, index) => ({
            label: question,
            value: index,
            style: {
              justifyContent: 'flex-start',
            },
          }))}
          placeholder="Select a question"
          containerStyle={{ height: 40, marginBottom: 20 }}
          style={{ backgroundColor: '#fafafa' }}
          // @ts-ignore
          onValueChange={(value: ItemType) => handleQuestionChange(value)}
        />
        <View>
          {selectedQuestionIndex !== null && faqData.questions && (
            <>
              <Text style={styles.questionText}>{faqData.questions[selectedQuestionIndex]}</Text>
              <Text style={styles.answerText}>{faqData.answers[selectedQuestionIndex]}</Text>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor:'#009A17',
    borderWidth:6,
  // borderRadius:20,
  //backgroundColor:'white',
        
  },
  backgroundImage: {
    flex: 0.5,
    //resizeMode: 'cover',
    //justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    
  },
  
  faqText: {
    position: 'absolute',
    top: 20,
    left: 130,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  square: {
    width: 300,
    height: 500,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
    padding: 20,
    
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontSize: 14,
  },
});

export default YourComponent;
