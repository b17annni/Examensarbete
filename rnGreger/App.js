import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      dataSource: null,
    };
  }

  componentDidMount() {
    return fetch(
      'https://api.resrobot.se/v2/location.nearbystops?key=808aabc0-1955-4159-b21c-46b52d70dce1&originCoordLat=59.293525&originCoordLong=18.083519&maxNo=5&format=json',
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
          <ActivityIndicator />
          <Text style={styles.text}> This text </Text>
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
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  keystyle: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
  },
});
