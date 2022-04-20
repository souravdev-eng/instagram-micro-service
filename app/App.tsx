import {
  AppStackNavigation,
  AuthStackNavigation,
} from "./src/navigation/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store/store";
import { useFonts } from "expo-font";
import { fonts } from "./src/constant";

export default function App() {
  const [loaded] = useFonts({
    SFBlack: require("./src/constant/fonts/SFBlack.ttf"),
    SFRegular: require("./src/constant/fonts/SFRegular.ttf"),
    SFSemiBold: require("./src/constant/fonts/SFSemibold.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppStackNavigation />
      </NavigationContainer>
    </Provider>
  );
}
