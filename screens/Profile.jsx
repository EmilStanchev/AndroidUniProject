import React, { useCallback, useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { auth } from "../FirebaseConfig.js";
import { signOut } from "firebase/auth";
import useLikedLandmarks from "../hooks/useLikedLandmarks.js";
import LandMarkItem from "../components/reusable/home/LandmarkItem.jsx";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import EditProfileModal from "../components/reusable/profile/EditProfileModal.jsx";
import LikedLandmark from "../components/reusable/profile/LikedLandmark.jsx";
import { likeOrUnlike } from "../services/likedLandmarks.js";

const Profile = () => {
  const { likedLandmarks, refetch } = useLikedLandmarks();
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleSave = (newDisplayName) => {
    setUser({ ...user, displayName: newDisplayName });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  const onDelete = async (landmarkId) => {
    await likeOrUnlike(landmarkId);
    await refetch();
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg",
          }}
          style={styles.headerBackground}
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
            <View
              style={{
                backgroundColor: "#C0C0C0",
                borderRadius: 10,
                padding: 10,
                marginTop: 5,
              }}
            >
              <Text style={styles.username}>
                {user?.displayName || user?.email}
              </Text>
            </View>
            <TouchableOpacity
              style={styles.editIcon}
              onPress={() => setModalVisible(true)}
            >
              <MaterialIcons name="edit" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.logoutIcon} onPress={handleLogout}>
              <MaterialIcons name="logout" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <FlatList
          style={styles.list}
          data={likedLandmarks}
          renderItem={({ item }) => (
            <LikedLandmark
              item={item}
              navigation={navigation}
              onDelete={onDelete}
            />
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.list}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
      <EditProfileModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
        currentDisplayName={user?.displayName || ""}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
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
  headerContent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
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
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  logoutIcon: {
    position: "absolute",
    top: 10,
    right: 50,
  },
});

export default Profile;
