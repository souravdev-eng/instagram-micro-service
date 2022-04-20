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
import { createNewUser } from "../../../store/reducers/userSlice";
import { useNavigation } from "@react-navigation/native";

const SignUpScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

  const handelSubmit = () => {
    dispatch(createNewUser({ email, fullName, userName, password }));
  };

  const handelNavigate = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Image source={IMAGE.LogoText} resizeMode="contain" style={styles.logo} />
      <AuthTextInput
        placeholder="Full name"
        value={fullName}
        onChangeText={(t) => setFullName(t)}
      />
      <AuthTextInput
        placeholder="Email"
        value={email}
        onChangeText={(t) => setEmail(t)}
        keyboardType="email-address"
      />
      <AuthTextInput
        placeholder="User name"
        value={userName}
        onChangeText={(t) => setUserName(t)}
      />
      <AuthTextInput
        placeholder="Password"
        value={password}
        onChangeText={(t) => setPassword(t)}
        secureTextEntry
      />

      <View style={{ alignSelf: "flex-end", marginRight: 20 }}>
        <Text style={styles.text}>
          Already have an account?
          <TouchableWithoutFeedback onPress={handelNavigate}>
            <Text style={{ color: colors.SkyBlue }}> Sign In</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handelSubmit}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
