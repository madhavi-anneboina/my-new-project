import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import  Header  from './components/header';
import TodoItem from './components/todoItem';
import { Button, StyleSheet, Text, View ,TextInput,ScrollView,FlatList } from 'react-native';


export default function App() {
  const [data, setData] = useState([
    {text :'buy coffe', key:1},
    {text :'buy book', key:2},
    {text :'buy pen', key:3},
    {text :'buy pencil', key:4},
    {text :'buy box', key:5}
])

const pressHandler = (key) =>{
  setData((previousData) =>{
    return previousData.filter(item=> item.key != key)
  })

}
 
  return (
    <View style={styles.container}>
    <Header />
     <View style={styles.content}>
       <View style={styles.list}>
           <FlatList
           data={data}
           renderItem= {({item})=>(
             <TodoItem  item={item} pressHandler={pressHandler}/>
           )}
            />
       </View>
      
     </View>
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
  content:{
    padding:40
  },
  List : {
    marginTop : 20
  }

});
