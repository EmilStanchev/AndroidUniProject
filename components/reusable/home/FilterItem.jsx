// src/components/FilterItem.js
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const FilterItem = ({ item, selectedFilter, setSelectedFilter }) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        selectedFilter === item.type && styles.selectedFilterButton,
      ]}
      onPress={() => setSelectedFilter(item?.type)}
    >
      <Ionicons
        name={item.icon}
        size={24}
        color={selectedFilter === item.type ? "#fff" : "#333"}
      />
      <Text
        style={[
          styles.filterText,
          selectedFilter === item.type && styles.selectedFilterText,
        ]}
      >
        {item.label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  selectedFilterButton: {
    backgroundColor: "#333",
  },
  filterText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
  selectedFilterText: {
    color: "#fff",
  },
});

export default FilterItem;
