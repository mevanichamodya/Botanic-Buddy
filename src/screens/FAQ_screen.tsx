import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

const YourComponent: React.FC = () => {
  const [faqData, setFaqData] = useState({ questions: [], answers: [] });

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

      const result = await response.json(); // assuming the API returns JSON
      setFaqData(result);
    } catch (error: any) {
      // Specify the type of 'error' explicitly as 'any'
      console.error('Error:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.faqText}>FAQ</Text>
      </View>
      <View style={styles.square}>
        {faqData.questions &&
          faqData.questions.map((question, index) => (
            <View key={index}>
              <Text style={styles.questionText}>{question}</Text>
              <Text style={styles.answerText}>{faqData.answers[index]}</Text>
            </View>
          ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  border: {
    flex: 1,
    borderWidth: 9,
    borderColor: 'green',
    overflow: 'hidden', // Ensure the border clips the image
  },
  faqText: {
    position: 'absolute',
    top: 20,
    left: 130,
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white', // Change this to white
  },
  square: {
    width: 300,
    height: 650,
    backgroundColor: 'lightgreen',
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
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
