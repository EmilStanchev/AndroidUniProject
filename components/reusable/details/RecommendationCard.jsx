import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const RecommendationCard = ({ landmark, navigation }) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      // Refresh action here, if needed
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Landmark details", { landmark: landmark })
      }
    >
      <View style={styles.card}>
        <Image source={{ uri: landmark.imageUrl }} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{landmark.title}</Text>
          <Text style={styles.location}>{landmark.location}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 300,
    backgroundColor: "#FFF",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "#888",
  },
});

export default RecommendationCard;
