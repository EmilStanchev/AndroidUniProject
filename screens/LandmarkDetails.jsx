// screens/LandmarkDetailScreen.js

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
export default function LandmarkDetailScreen({ route }) {
  const { landmark } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: landmark.imageUrl }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{landmark.title}</Text>
        <Text style={styles.description}>{landmark.description}</Text>
        <View style={styles.infoContainer}>
          <Entypo name="location-pin" size={24} color="black" />
          <Text style={styles.info}>{landmark.location}</Text>
        </View>
        <View style={styles.infoContainer}>
          <AntDesign name="heart" size={16} color="#FF6B6B" />
          <Text style={styles.info}>{landmark?.likes?.length}</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  info: {
    marginLeft: 5,
    fontSize: 14,
    color: "#888",
  },
});
