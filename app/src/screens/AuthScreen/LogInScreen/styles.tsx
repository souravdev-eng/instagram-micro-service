import { StyleSheet } from "react-native";
import { colors, fonts } from "../../../constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.White,
    paddingTop: 60,
  },
  logo: {
    width: 160,
    height: 50,
    marginTop: 40,
    marginBottom: 30,
  },
  button: {
    width: "92%",
    height: 45,
    alignItems: "center",
    backgroundColor: colors.SkyBlue,
    justifyContent: "center",
    marginTop: 30,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 16,
    color: colors.White,
    fontFamily: fonts.SFSemiBold,
  },
  text: {
    fontFamily: fonts.SFRegular,
    fontSize: 15,
  },
});

export default styles;
