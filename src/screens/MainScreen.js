import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "../conponents/Navbar/Navbar";
import AppLoader from "../ui/AppLoader";
import AppCard from "../ui/AppCard";
import THEME from "../theme";

function MainScreen({
  reset,
  data,
  getQuery,
  getPageNum,
  pageNum,
  setTodoId,
  loading
}) {
  let content = (
    <View>
      <View style={styles.listImg}>
        {data.results.map(elem => (
          <View key={elem.id} style={styles.appcard}>
            <Text style={styles.textInfo}>{elem.user.name}</Text>
            <AppCard
              pic={elem.urls.thumb}
              id={elem.id}
              picfull={elem.urls.full}
              onOpen={setTodoId}
            />
          </View>
        ))}
      </View>

      {loading && <AppLoader />}
      <View>
        {data.results.length > 0 && (
          <View style={styles.button}>
            <TouchableOpacity>
              <AntDesign.Button
                backgroundColor={THEME.DENGER_COLOR}
                onPress={reset}
                name="reload1"
              >
                Reset
              </AntDesign.Button>
            </TouchableOpacity>

            {pageNum >= 1 && (
              <TouchableOpacity>
                <AntDesign.Button
                  onPress={() => getPageNum(pageNum + 1)}
                  name="doubleright"
                >
                  Next
                </AntDesign.Button>
              </TouchableOpacity>
            )}
            {pageNum >= 2 && (
              <TouchableOpacity>
                <AntDesign.Button
                  onPress={() => getPageNum(pageNum - 1)}
                  name="doubleleft"
                >
                  Back
                </AntDesign.Button>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );

  if (data.results.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.image}
          source={require("../../assets/international_640.png")}
        />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Navbar onSubmit={getQuery}></Navbar>
        </View>
        {content}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "2%",
    paddingVertical: "5%"
  },
  text: {
    color: "#fff",
    fontSize: 12,
    paddingTop: "5%"
  },
  textInfo: {
    color: "#5f5f5f",
    fontSize: 12,
    padding: 2
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    justifyContent: "space-around",
    paddingTop: "10%"
  },
  resetBtn: { backgroundColor: THEME.DENGER_COLOR },
  listImg: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  imgWrap: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    height: 300
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  appcard: {
    padding: 3,
    alignItems: "center"
  }
});

export default MainScreen;
