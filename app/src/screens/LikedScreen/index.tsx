import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LikedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LikedScreen</Text>
    </View>
  );
};

export default LikedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
