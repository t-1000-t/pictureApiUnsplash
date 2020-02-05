import React from "react";
import { Text, StyleSheet, View } from "react-native";

const AppText = props => {
  return (
    <View>
      <Text style={{ ...styles.default, ...props.style }}>
        {props.children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  default: {
    fontFamily: "roboto-regular",
    fontSize: 20
  }
});

export default AppText;
