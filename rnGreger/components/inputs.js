import React, {useState} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

export default function SetSearch() {
  const [long, setlong] = useState('');
  const [lat, setlat] = useState('');
  global.longi = '11.964167';
  global.lati = '57.711111';
  const presshandler = () => {
    global.lati = lat;
    global.longi = long;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputrow}>
        <Text style={styles.text}>Latitude: </Text>
        <TextInput
          style={styles.inkoord}
          placeholder="Latitude"
          onChangeText={lat => setlat(lat)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputrow}>
        <Text style={styles.text}>Longitude: </Text>
        <TextInput
          style={styles.inkoord}
          keyboardType="numeric"
          placeholder="Longitude"
          onChangeText={long => setlong(long)}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Search Locations" onPress={presshandler} color="coral" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#eee',
  },
  btn: {
    color: '#eee',
  },
  inputrow: {
    flexDirection: 'row',
  },
  inkoord: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'flex-end',
    color: '#1F1B24',
    backgroundColor: '#eee',
    padding: 10,
    marginBottom: 5,
  },
});
