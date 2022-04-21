import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Icon } from "../../constant";
import Svg, { SvgProps, Path } from "react-native-svg";

export const Like = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Like} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const LikeActive = () => {
  return (
    <TouchableOpacity>
      <Image
        source={Icon.Active_Like}
        style={styles.icon}
        resizeMode="contain"
      />
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
export const HomeActive = () => {
  return (
    <TouchableOpacity>
      <Image
        source={Icon.Active_Home}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
export const Home = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Home} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const SearchActive = () => {
  return (
    <TouchableOpacity>
      <Image
        source={Icon.Active_Search}
        style={styles.icon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};
export const Search = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Search} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};
export const Add = () => {
  return (
    <TouchableOpacity>
      <Image source={Icon.Add} style={styles.icon} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 28,
    height: 28,
  },
});
