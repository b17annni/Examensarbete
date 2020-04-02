import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Myheader = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Gregers-FaraHärIfrån</Text>
        <Text style={styles.subtitle}> Sök hållplatser </Text>
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
  titleText: {
    fontSize: 40,
    color: '#f0f8ff',
  },
  subtitle: {
    fontSize: 20,
    color: '#f0f8ff',
    margin: 2,
  },
});

export default Myheader;
