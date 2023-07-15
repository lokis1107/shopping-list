import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.Header}>
      <Text style={styles.Title}>Shopping List</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Header: {
    height: 70,
    backgroundColor: "#87cefa",
    alignItems: "center",
    justifyContent: "center",
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    marginBottom:20
  },
  Title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
