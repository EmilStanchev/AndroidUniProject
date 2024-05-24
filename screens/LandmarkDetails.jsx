// screens/LandmarkDetailScreen.js

import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import StarRating from "../components/ui/StarRating";
import MapView, { Marker } from "react-native-maps";

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
          <StarRating rating={landmark?.rating} />
          <Text style={styles.info}>({landmark?.rating})</Text>
        </View>
        <View style={styles.infoContainer}>
          <AntDesign name="heart" size={16} color="#FF6B6B" />
          <Text style={styles.info}>{landmark?.likes?.length}</Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: landmark.latitude,
              longitude: landmark.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: landmark.latitude,
                longitude: landmark.longitude,
              }}
              title={landmark.title}
              description={landmark.location}
            />
          </MapView>
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
    fontSize: 24,
  },
  info: {
    fontSize: 14,
    color: "#888",
  },
  starContainer: {
    flexDirection: "row",
    marginRight: 5,
  },
  location: {
    fontSize: 20,
    fontWeight: "bold",
  },
  likeInfo: {
    fontSize: 20,
  },
  mapContainer: {
    height: 200,
    width: "100%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
