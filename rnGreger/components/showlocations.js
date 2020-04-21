import React from 'react';
import {StyleSheet, View, Text} from 'react-native';


export default class ListLocations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      dataSource: null,
    };
  }
  componentDidMount() {
    const lati = global.lati;
    const longi = global.longi;
    const ns = global.numbi;
    return fetch(
      'https://api.resrobot.se/v2/location.nearbystops?key=<KEY>&originCoordLat=' +
        lati +
        '&originCoordLong=' +
        longi +
        '&maxNo=' +
         ns +
        '&format=json',
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isloading: false,
          dataSource: responseJson.StopLocation,
        });
      })

      .catch(error => {
        console.log(error);
      });
  }
  render() {
    if (this.state.isloading) {
      return (
        <View style={styles.container}>
          <Text style={styles.text}> Loading Locations </Text>
        </View>
      );
    } else {
      let places = this.state.dataSource.map((val, key) => {
        return (
          <View key={key} style={styles.keystyle}>
            <Text style={styles.text}>{val.name}</Text>
          </View>
        );
      });

      return <View style={styles.container}>{places}</View>;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1F1B24',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
  },
  text: {
    fontSize: 20,
color: '#f0f8ff',
padding: 10,
  },
  keystyle: {

    color: '#f0f8ff',
    borderBottomColor: '#f0f8ff',
    borderBottomWidth: 0.5,
  },
});
