import { StyleSheet } from "react-native";
import { colors, fonts } from "../../constant";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 98,
    borderWidth: 0.7,
    borderColor: colors.LOW_Black,
  },
  oval: { width: 62, height: 62 },
  wrapper: {
    marginLeft: 6,
    marginRight: 10,
    marginTop: 9,
    width: 70,
    alignItems: "center",
  },
  userStoryImageCover: { position: "absolute", top: 6, left: 10 },
  userStoryImage: {
    width: 50,
    height: 50,
    borderRadius: 60,
  },
  text: {
    fontFamily: fonts.SFSemiBold,
  },
});

export default styles;
