import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SetSearch from './components/inputs';
import ListLocations from './components/getlocations';
import Myheader from './components/header';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Myheader />
      <SetSearch />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('ShowLocations')}
      />
    </View>
  );
}

function ShowLocations({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Show me locations</Text>
      <ListLocations />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShowLocations" component={ShowLocations} />
      </Stack.Navigator>
    </NavigationContainer>
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
});

export default App;
