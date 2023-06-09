import React,{useState} from 'react';
import { Button, StyleSheet, TextInput } from 'react-native';

const addTodo = ({submitHandler}) => {
    const[text,setText] = useState('')
    const changeHandler = (val) =>{
      setText(val)
    }
  return (
   <View>
    <TextInput 
        style={styles.input}
        placeholder='new todos'
        onChangeText={changeHandler}
    />
    <Button onPress={()=>submitHandler(text)}/>
   </View>
  )
}
const styles = StyleSheet.create({
    input: {
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomWidth:1,
    borderBottomColor:'#ddd'
},
})

export default addTodo
