import React from "react";
import { View, FlatList, StyleSheet } from "react-native";

import LandmarkItem from "../components/reusable/home/LandmarkItem";
const landmarks = [
  {
    id: "1",
    title: "Eiffel Tower",
    description: "An iconic symbol of Paris.",
    likes: 1024,
    place: "Paris, France",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
  },
  {
    id: "2",
    title: "Statue of Liberty",
    description: "A symbol of freedom in the USA.",
    likes: 940,
    place: "New York, USA",
    image:
      "https://cdn.britannica.com/31/94231-050-C6B60B89/Statue-of-Liberty-Island-Upper-New-York.jpg",
  },
];
const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={landmarks}
        renderItem={LandmarkItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    padding: 10,
  },
});

export default Home;
