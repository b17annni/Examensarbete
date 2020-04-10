import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Myheader = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.myTitle}>Gregers-FaraHärIfrån</Text>
        <Text style={styles.middle}>React Native</Text>
        <Text style={styles.mySubtitle}> Sök hållplatser </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#1F1B24',
  },
  headerContainer: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  myTitle: {
    
    fontSize: 40,
    color: '#f0f8ff',
  },
  middle: {
    fontSize: 15,
    color: '#f0f8ff',
    margin: 2,
  },
  mySubtitle:{
fontSize: 30,
color: '#f0f8ff',
  },
});

export default Myheader;
