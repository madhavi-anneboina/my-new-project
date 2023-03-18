import React from 'react';
import { Button, StyleSheet, Text, View ,TextInput,ScrollView,FlatList } from 'react-native';

const header = () => {
  return (
    <View style={styles.header}>
    <Text style={styles.title}>
     My Todos
    </Text>

    </View>
      
  
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header :{
        height:80,
        paddingTop:38,
        backgroundColor:'blue'
    },
    title:{
   textAlign:'center',
   color:'#fff',
   fontSize:20,
   fontWeight:'bold'
   
    }
   
  
  });

export default header
