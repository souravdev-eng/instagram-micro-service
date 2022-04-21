import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Icon } from "../../constant";
import styles from "./styles";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <Image
            source={Icon.Camera}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Image
          source={Icon.Logo}
          resizeMode="contain"
          style={{
            width: 150,
            height: 30,
            marginTop: 10,
            alignSelf: "center",
          }}
        />
        <View style={styles.row}>
          <TouchableOpacity>
            <Image source={Icon.Tv} resizeMode="contain" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={Icon.Messanger}
              resizeMode="contain"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
