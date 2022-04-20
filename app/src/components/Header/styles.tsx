import { StyleSheet, StatusBar } from "react-native";
import { colors } from "../../constant";

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
  },
  icon: {
    width: 25,
    height: 25,
  },

  iconWrapper: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    justifyContent: "space-between",
  },
});

export default styles;
