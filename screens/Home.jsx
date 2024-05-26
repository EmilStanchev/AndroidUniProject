import React, { useCallback, useState } from "react";
import { StyleSheet, View, FlatList, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";

import LandmarkItem from "../components/reusable/home/LandmarkItem";
import useLandmarks from "../hooks/useLandmarks";
import useLikedLandmarks from "../hooks/useLikedLandmarks";
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
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();
  const { landmarks, loading, error, landmarksRefetch } = useLandmarks();
  const { likedLandmarks } = useLikedLandmarks();

  const likedLandmarkIds = likedLandmarks.map((landmark) => landmark.id);

  const filteredLandmarks =
    selectedFilter === "all" || !selectedFilter
      ? landmarks
      : landmarks.filter((landmark) => landmark.type === selectedFilter);

  const handleFilterPress = (filterType) => {
    setSelectedFilter((prevFilter) =>
      prevFilter === filterType ? "all" : filterType
    );
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    landmarksRefetch().then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <View style={styles.container}>
      <View style={styles.filterContainer}>
        <FlatList
          data={filters}
          renderItem={({ item }) => (
            <FilterItem
              item={item}
              selectedFilter={selectedFilter}
              setSelectedFilter={() => handleFilterPress(item.type)}
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
          <LandmarkItem
            item={item}
            navigation={navigation}
            isLiked={likedLandmarkIds.includes(item.id)}
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
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
});

export default Home;
