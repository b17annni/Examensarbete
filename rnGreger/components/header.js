import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import searchLocations from './components/searchme';

const Myheader = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Gregers-FaraHärIfrån</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#1F1B24',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 40,
    color: '#f0f8ff',
  },
});

export default Myheader;
