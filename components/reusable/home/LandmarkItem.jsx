import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { likeOrUnlike } from "../../../services/likedLandmarks"; // Import the like service
import useLikedLandmarks from "../../../hooks/useLikedLandmarks";
import useLandmarks from "../../../hooks/useLandmarks";

const LandmarkItem = ({ item, navigation }) => {
  const { refetch } = useLikedLandmarks();
  const { landmarksRefetch } = useLandmarks();

  const toggleLike = async (landmarkId) => {
    await likeOrUnlike(landmarkId);
    refetch();
    landmarksRefetch();
  };
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate("Landmark details", { landmark: item })
      }
    >
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item?.imageUrl }} style={styles.image} />
          <TouchableOpacity
            style={styles.likesContainer}
            onPress={() => {
              toggleLike(item?.id);
            }}
          >
            <AntDesign name="heart" size={22} color="#FF6B6B" />
          </TouchableOpacity>
        </View>
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item?.title}</Text>
          <Text style={styles.description}>
            {item?.description?.slice(0, 50)}...
          </Text>
          <Text style={styles.place}>
            <Entypo name="location-pin" size={24} color="black" />
            {item?.location}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
    color: "black",
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
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
  },
  likesContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Optional: to improve visibility
    padding: 5,
    borderRadius: 5,
  },
  likes: {
    fontSize: 14,
    color: "#FF6B6B",
    marginLeft: 5,
  },
});

export default LandmarkItem;
