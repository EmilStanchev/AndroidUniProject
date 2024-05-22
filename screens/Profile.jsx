import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
} from "react-native";
import { auth } from "../FirebaseConfig.js";
import useLikedLandmarks from "../hooks/useLikedLandmarks.js";
import LandMarkItem from "../components/reusable/home/LandmarkItem.jsx";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

const Profile = () => {
  const { likedLandmarks, loading, error } = useLikedLandmarks();
  const navigation = useNavigation();

  console.log(likedLandmarks.length);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg",
          }}
          style={styles.headerBackground}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerContent}>
            <Image
              style={styles.avatar}
              source={{
                uri:
                  user?.photoURL ||
                  "https://cdn-icons-png.flaticon.com/512/3682/3682281.png",
              }}
            />
            <Text style={styles.username}>
              {user?.displayName || "yourusername"}
            </Text>
          </View>
        </ImageBackground>

        <FlatList
          style={styles.list}
          data={likedLandmarks}
          renderItem={({ item }) => (
            <LandMarkItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "gray",
  },
  list: {
    marginTop: 10,
  },
  container: {
    flex: 1,
  },
  headerBackground: {
    width: "100%",
    height: 200,
  },
  headerImage: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "white",
  },
  username: {
    marginTop: 10,
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  section: {
    margin: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: "#333",
  },
  interests: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  interest: {
    backgroundColor: "#4b7bec",
    color: "white",
    padding: 10,
    margin: 5,
    borderRadius: 20,
    fontSize: 14,
  },
  contact: {},
  contactItem: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});
export default Profile;
