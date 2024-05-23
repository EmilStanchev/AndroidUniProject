import { Text, StyleSheet } from "react-native";

const CustomText = ({ text }) => {
  return <Text style={styles.container}>{text}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  container: {
    fontSize: 17,
    color: "#121212",
    maxWidth: "100%",
  },
});
