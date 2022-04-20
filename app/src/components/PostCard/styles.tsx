import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constant";

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 0.7,
    paddingBottom: 20,
    borderBottomColor: colors.LOW_Black,
  },
  avatar: {
    width: 35,
    height: 35,
    borderRadius: 60,
  },
  text: {
    fontFamily: fonts.SFRegular,
    fontSize: 15.2,
  },
  textBold: {
    fontFamily: fonts.SFSemiBold,
    fontSize: 15.2,
  },
  userContainer: {
    paddingLeft: 10,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 11,
  },
  verify: {
    width: 15,
    height: 15,
    marginLeft: 6,
  },
  userInfo: { paddingLeft: 6 },
  postImage: { aspectRatio: 10 / 9 },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "32%",
    justifyContent: "space-between",
    marginLeft: 8,
    marginVertical: 13,
  },
  icon: {
    width: 28,
    height: 28,
  },
  commentUser: {
    width: 26,
    height: 26,
    resizeMode: "cover",
    borderRadius: 40,
    marginRight: 6,
    marginLeft: 6,
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    // paddingHorizontal: 6,
    marginTop: 8,
  },
});

export default styles;
