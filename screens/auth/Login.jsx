// screens/LoginScreen.js

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default LoginScreen;
