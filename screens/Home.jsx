import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LandmarkItem from "../components/reusable/home/LandmarkItem";
import useLandmarks from "../hooks/useLandmarks";
import FilterItem from "../components/reusable/home/FilterItem";

const filters = [
  { type: "all", icon: "globe-sharp", label: "all" },
  { type: "Historic", icon: "time", label: "Historical" },
  { type: "Natural Wonder", icon: "leaf", label: "Natural" },
  { type: "Monastery", icon: "book-sharp", label: "Monastery" },
  { type: "Museum", icon: "storefront", label: "Museum" },
  { type: "Island", icon: "fish", label: "Island" },
  { type: "Town", icon: "home", label: "Town" },
  { type: "Castle", icon: "eye", label: "Castle" },
  { type: "Park", icon: "flower", label: "Park" },
];

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const navigation = useNavigation();
  const { landmarks, loading, error } = useLandmarks();

  const filteredLandmarks =
    selectedFilter === "all" || !selectedFilter
      ? landmarks
      : landmarks.filter((landmark) => landmark.type === selectedFilter);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <FilterItem
              item={item}
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
          )}
          keyExtractor={(item) => item.type}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterList}
        />
      </View>
      <FlatList
        data={filteredLandmarks}
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
  filterContainer: {
    paddingHorizontal: 15,
  },
  filterList: {
    paddingVertical: 10,
    paddingHorizontal: 5,
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
