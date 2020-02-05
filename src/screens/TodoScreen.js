import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableHighlight,
  Image
} from "react-native";

function TodoScreen({ goBack, todo }) {
  return (
    <View>
      <View style={styles.wrapper}>
        <Text>{todo.user.name}</Text>
        <TouchableHighlight onPress={goBack}>
          <Image
            style={styles.imageFull}
            source={{
              uri: todo.urls.regular
            }}
          />
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 30
  },
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  imageFull: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  }
});

export default TodoScreen;
