import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  Text,
} from "react-native";
import CustomText from "../../ui/CustomText";
import StarRating from "../../ui/StarRating";

const LikedLandmark = ({ item, navigation, onDelete }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Landmark details", { landmark: item })
      }
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Image source={{ uri: item?.imageUrl }} style={styles.image} />
        <View>
          <CustomText text={item?.title} />
          <CustomText text={item?.location} />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          ></View>
          <StarRating rating={item?.rating} />
          <Text>({item?.rating})</Text>
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          onPress={() => {
            onDelete(item?.id);
          }}
        >
          <Text style={styles.removeButton}>Remove</Text>
        </TouchableOpacity>
        <Text style={styles.detailsButton}>Details</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LikedLandmark;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 12,
    backgroundColor: "#FFFFFF",
    marginBottom: 15,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    borderRadius: 12,
    marginRight: 10,
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
  },
  removeButton: {
    backgroundColor: "red",
    borderRadius: 10,
    padding: 10,
    color: "white",
    fontSize: 18,
  },
  detailsButton: {
    backgroundColor: "green",
    borderRadius: 10,
    padding: 10,
    color: "white",
    fontSize: 18,
  },
});
