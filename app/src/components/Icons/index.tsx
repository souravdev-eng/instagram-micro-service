import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "../../constant";

export const Like = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Like} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const Comment = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Comment} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const Messanger = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Messanger} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const Save = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Save} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
