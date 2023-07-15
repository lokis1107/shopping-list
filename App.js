import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import AddItem from "./components/AddItem";

export default function App() {
  const [list, setList] = useState([]);

  const handleDelete = (item)=>{
    setList((pre) => {
      return pre.filter((listItem)=> listItem.id !== item.id)
    })
  }

  const Delete = ()=>{
    setList([])
  }

  const handleAdd=(item)=>{
    if(item.length === 0){
      Alert.alert("Alert", "Please add an item")
      return
    }
    setList([...list,{name:item, id:Math.random().toString()}])
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Header/>
      <AddItem Delete={Delete} Add={handleAdd}/>
      <Content list={list} handleDelete={handleDelete}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
