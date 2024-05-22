import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

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
  {
    id: "3",
    title: "Statue ",
    description: "A symbol of freedom in the USA.",
    likes: 940,
    place: "New York, USA",
    image:
      "https://cdn.britannica.com/31/94231-050-C6B60B89/Statue-of-Liberty-Island-Upper-New-York.jpg",
  },
];
const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={landmarks}
        renderItem={({ item }) => (
          <LandmarkItem item={item} navigation={navigation} />
        )}
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
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 15,
    elevation: 3, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 200,
  },
  cardContent: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
    color: "#666",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  place: {
    fontSize: 14,
    color: "#888",
  },
  likesContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  likes: {
    fontSize: 14,
    color: "#FF6B6B",
    marginLeft: 5,
  },
});

export default Home;
