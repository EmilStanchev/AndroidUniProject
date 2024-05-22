import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{
        uri: "https://lh3.googleusercontent.com/proxy/x9d0n4YwvCDX99ND7JZXytK3sY_E_wpUTiqYIPLUEWD8PsSgLU01N5XKD417U8LKjWIIWKp7jvGfyiMt5wniz8hJ0n1IsiXGmYkftEaTuvwI-bHR9QjMsU-e_IOcCuagSjjAeoLAy1l8QMY",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <View style={styles.centeredView}>
          <Text style={styles.welcomeText}>Welcome to LandSnap</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Let's start</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    textAlign: "center",
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 15,
    borderRadius: 5,
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
