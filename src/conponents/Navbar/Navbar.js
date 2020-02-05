import React, { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Navbar = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const pressHandler = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
      Keyboard.dismiss(); //скрытие клавиатуры
    } else {
      Alert.alert("Attеntion", "Write some word...");
    }
  };

  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Write some word..."
        autoCorrect={false}
        autoCapitalize="none"
        // keyboardType="number-pad"
      />
      <AntDesign.Button
        style={styles.btn}
        onPress={pressHandler}
        name="appstore-o"
      >
        Press here
      </AntDesign.Button>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "5%"
  },
  input: {
    width: "60%",
    borderBottomWidth: 2,
    borderStyle: "solid",
    borderBottomColor: "#3949ab",
    padding: 5
  }
});

export default Navbar;
