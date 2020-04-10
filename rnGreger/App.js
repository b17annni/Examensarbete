import * as React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SetSearch from './components/inputs';
import ListLocations from './components/getlocations';
import Myheader from './components/header';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Myheader />
      <SetSearch />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ShowLocations')} >
        <Text>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

function ShowLocations({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Show My locations</Text>
      <ListLocations />
      <TouchableOpacity
        style={styles.btnback}
        onPress={() => navigation.navigate('Home')} >
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
        <Stack.Screen name="ShowLocations" component={ShowLocations} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1B24',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
color: '#f0f8ff',
  },
  mySubtitle:{
    fontSize: 30,
    color: '#f0f8ff',
      },
      btn: {
        color: '#1F1B24',
        backgroundColor: '#f0f8ff',
        width: 150,
        height: 35,
        alignItems: 'center',
        margin: 10,
        paddingTop: 7,

      },
      btnback: {
        color: '#1F1B24',
        backgroundColor: '#f0f8ff',
        height: 35,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        margin: 10,
        paddingTop: 7,
      }
});

export default App;
