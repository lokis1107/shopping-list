import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const AddItem = ({Delete, Add}) => {

    const [input, setInput] = useState('')

    const handleAdd = (input)=>{
        Add(input)
        setInput("")
    }

  return (
    <View style={styles.container}>
      <TextInput placeholder='Add a Item' value={input} style={styles.input} onChangeText={(text)=>setInput(text)}/>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.add} onPress={()=>handleAdd(input)}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.but} onPress={Delete}>
        <Text style={styles.add}>Delete All</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    input:{
        borderBottomWidth:1,
        borderBottomColor:"black",
        textAlign:"center",
        marginVertical:30
    },
    container:{
        marginHorizontal:40
    },
    button:{
        backgroundColor:"#728fec",
        padding:10,
        marginRight:"auto",
        borderRadius:5,
        marginLeft:"20%"
    },
    but:{
        backgroundColor:"#f08080",
        padding:10,
        alignItems:"flex-end",
        marginLeft:"auto",
        borderRadius:5,
        marginTop:-45,
        marginRight:"20%"
    },
    add:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    }
})