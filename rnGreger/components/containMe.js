import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Grg = () => {
  return (
    <View style={styles.titleContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Gregers-FaraHärIfrån</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Button
          style={styles.searchButton}
          onPress={press}
          title="button!"
          color="grey"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    backgroundColor: '#1F1B24',
  },
  searchButton: {
    fontSize: 48,
    color: '#f0f8ff',
  },
  myposButton: {
    fontSize: 48,
    color: '#f0f8ff',
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 48,
    color: '#f0f8ff',
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40,
  },
  title: {
    fontSize: 48,
    color: '#f0f8ff',
  },
  subtitle: {
    fontSize: 24,
    color: '#f0f8ff',
  },
});

export default Grg;
