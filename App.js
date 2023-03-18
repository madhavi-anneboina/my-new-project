import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput,ScrollView} from 'react-native';


export default function App() {
  const [name, setName] = useState([
  {name : 'madhavi', key:1 },
  {name : 'shalini', key:2 },
  {name : 'kamini', key:3 },
  {name : 'ramini', key:4 },
  {name : 'jomini', key:5 },
  {name : 'pumini', key:6 },
  {name : 'tamini', key:7},
  ])
 
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      {people.map(name=>{
        return (
      <li key={index}>
        {name.name}
      </li>)})}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
