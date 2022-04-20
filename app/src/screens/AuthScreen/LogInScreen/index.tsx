import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import styles from "./styles";
import { colors, IMAGE } from "../../../constant";
import AuthTextInput from "../../../components/AuthTextInput";
import { useAppDispatch } from "../../../hooks/useReduxHooks";
import { useNavigation } from "@react-navigation/native";

const LogInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();

  const handelSubmit = () => {
    // dispatch(createNewUser({ email, fullName, , password }));
  };

  const handelNavigate = () => {
    navigation.navigate("Signup");
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGE.LogoText} resizeMode="contain" style={styles.logo} />

      <AuthTextInput
        placeholder="Email"
        value={email}
        onChangeText={(t) => setEmail(t)}
        keyboardType="email-address"
      />
      <AuthTextInput
        placeholder="Password"
        value={password}
        onChangeText={(t) => setPassword(t)}
        secureTextEntry
      />

      <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
        <Text style={styles.text}>
          Did not have an account?
          <TouchableWithoutFeedback onPress={handelNavigate}>
            <Text style={{ color: colors.SkyBlue }}> Sign Up</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handelSubmit}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;
