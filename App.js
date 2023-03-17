import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View ,TextInput} from 'react-native';


export default function App() {
  const [name, setName] = useState('madhavi')
  const clickHandler = e =>{
    setName('ramani')
  }
  return (
    <View style={styles.container}>
      <Text>my name is {name}</Text>
      <StatusBar style="auto" />
      <Button onclick={clickHandler}> clike me </Button>
      <TextInput 
       style={{borderColor:'grey',height:40,borderWidth:1}}
       name="username" placeholder="e.g john"/>
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
