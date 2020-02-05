import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableHighlight } from "react-native";

function AppCard({ pic, picfull, id, onOpen }) {
  return (
    <View>
      <TouchableHighlight onPress={() => onOpen(id)}>
        <View style={styles.imgWrap}>
          <Image
            style={styles.image}
            source={{
              uri: pic
            }}
          />
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain"
  }
});

export default AppCard;
