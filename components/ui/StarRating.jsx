import { StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <View style={styles.starContainer}>
      {[...Array(fullStars)].map((_, index) => (
        <AntDesign key={index} name="star" size={20} color="#FFD700" />
      ))}
      {halfStar && <AntDesign name="star" size={20} color="#FFD700" />}
      {[...Array(emptyStars)].map((_, index) => (
        <AntDesign key={index} name="staro" size={20} color="#FFD700" />
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  starContainer: {
    flexDirection: "row",
    marginRight: 5,
  },
});
export default StarRating;
