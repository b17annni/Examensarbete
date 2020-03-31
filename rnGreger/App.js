import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Myheader from './components/header';
import Search from './components/searching';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: true,
      dataSource: null,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Myheader />
        <TextInput
          style={styles.inputkord}
          placeholder={'Latitude'}
          onChangeText={lati => this.setState({inlati: lati})}
          returnKeyType={'next'}
          value={this.state.inlati}
        />
        <TextInput
          style={styles.inputkord}
          placeholder={'Longitude'}
          onChangeText={longi => this.setState({inlongi: longi})}
          returnKeyType={'next'}
          value={this.state.inlongi}
        />
        <View style={styles.btbt}>
          <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.text}>Press Here</Text>
          </TouchableOpacity>
        </View>
        <Search />
      </View>
    );
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
    borderColor: '#eee',
  },
  btbt: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: '#184032',
    borderRadius: 100 / 2,
  },
  btn: {
    margin: 5,
  },
  inputkord: {
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
  keystyle: {
    flex: 1,
    alignSelf: 'stretch',
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
  },
});
