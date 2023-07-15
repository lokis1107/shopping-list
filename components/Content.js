import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; 

const Content = ({ list, handleDelete }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => handleDelete(item)} style={styles.del}>
              <Text style={styles.content}>{item.name}</Text>
              <MaterialIcons name="delete" size={28} color="red" style={styles.but}/>
            </TouchableOpacity>
          );
        }}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  flatList: {
    marginBottom:"50%"
  },
  content: {
    fontSize: 15,
    fontWeight: "bold",
    padding: 20,
    color: "white",
  },
  del:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    backgroundColor: "#728fec",
    borderRadius: 10,
    padding:5,
    marginTop: 20,
  },but:{
    marginLeft:"auto",
  }
});
