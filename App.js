import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import THEME from "./src/theme";
import axios from "axios";
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

function App() {
  const [data, setData] = useState({ results: [] });
  const [query, setQuery] = useState("");
  const [pageNum, setPageNum] = useState(1);
  const [todoId, setTodoId] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const res = await axios(
          `https://api.unsplash.com/search/photos?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0&page=${pageNum}&query=${query}`
        );
        setData(res.data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [query, pageNum]);

  const reset = () => {
    setData({ results: [] });
    setPageNum(1);
    setQuery("");
    setTodoId(null);
    setLoading(false);
  };

  let content = (
    <MainScreen
      data={data}
      reset={reset}
      getQuery={setQuery}
      getPageNum={setPageNum}
      pageNum={pageNum}
      reset={reset}
      setTodoId={setTodoId}
      loading={loading}
    />
  );

  if (todoId) {
    const selectedTodo = data.results.find(elem => elem.id === todoId);
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />;
  }

  return <View style={styles.colorApp}>{content}</View>;
}

const styles = StyleSheet.create({
  colorApp: {
    width: "100%",
    height: "100%",
    backgroundColor: THEME.WRAPP_COLOR
  }
});

export default App;
