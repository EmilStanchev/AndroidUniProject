// App.js

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./FirebaseConfig";
import AppNavigator from "./navigation/AppNavigator";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test"));
        const dataList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataList);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  data.map((item) => {
    console.log(item);
  });
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
