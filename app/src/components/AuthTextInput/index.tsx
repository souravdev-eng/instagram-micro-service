import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors, fonts } from "../../constant";

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  keyboardType?:
    | "default"
    | "number-pad"
    | "decimal-pad"
    | "numeric"
    | "email-address"
    | "phone-pad";
  secureTextEntry?: boolean;
  multiline?: boolean;
  style?: any;
}

const AuthTextInput: React.FC<Props> = (props) => {
  return (
    <View style={styles.textInput}>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        placeholderTextColor={colors.LOW_Black}
        style={styles.input}
      />
    </View>
  );
};

export default AuthTextInput;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: colors.LOW_GreyBlack,
    width: "92%",
    height: 46,
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.LOW_GreyBlack,
    marginVertical: 12,
  },
  input: {
    fontSize: 16,
    fontFamily: fonts.SFRegular,
  },
});
