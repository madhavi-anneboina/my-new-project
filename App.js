import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


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
