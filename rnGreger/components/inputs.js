import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

export default function SetSearch() {
  const [long, setlong] = useState('');
  const [lat, setlat] = useState('');
  const [numb, setnum] = useState('');
  global.lati = lat;
  global.longi = long;
  global.numbi = numb;

  return (
    <View style={styles.container}>
      <View style={styles.inputrow}>
        <TextInput
          style={styles.inkoord}
          placeholder="Latitude"
          onChangeText={lat => setlat(lat)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputrow}>
        <TextInput
          style={styles.inkoord}
          keyboardType="numeric"
          placeholder="Longitude"
          onChangeText={long => setlong(long)}
        />
      </View>
      <View style={styles.number}>
      <TextInput
          style={styles.inkoord}
          placeholder="Amount of locations"
          onChangeText={numb => setnum(numb)}
          keyboardType="numeric"
        />
        </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1B24',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    color: '#f0f8ff',
  },
  inkoord: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    color: '#1F1B24',
    backgroundColor: '#f0f8ff',
    padding: 10,
    margin: 5,
  },
});
