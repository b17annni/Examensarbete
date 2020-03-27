import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {API_KEY} from './components/trafikk';

import Grg from './components/containMe';

export default class App extends React.Component {
  state = {
    isLoading: false,
    error: null,
  };
  //lat = 57.711111, lon = 11.964167 `https://api.resrobot.se/v2/location.nearbystops.json?key=${API_KEY}&originCoordLat=${lat}&originCoordLong=${lon}`,

  fetchStations() {
    fetch(
      `https://api.resrobot.se/v2/location.nearbystops.json?key=${API_KEY}&originCoordLat=57.711111&originCoordLong=11.964167`,
    )
      .then(res => res.json())
      .then(json => {
        console.log(json);
      });
  }

  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? <Text>Fetching</Text> : <Grg />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
  },
});
