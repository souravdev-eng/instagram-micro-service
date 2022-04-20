import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./styles";
import { Icon } from "../../constant";
import { Comment, Like, Messanger, Save } from "../Icons";

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const postImage2 =
  "https://images.unsplash.com/photo-1501163268664-3fdf329d019f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFjYm9va3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60";

const PostCard = () => {
  return (
    <View style={styles.container}>
      {/* User part */}
      <View style={styles.userContainer}>
        <TouchableOpacity>
          <Image
            source={{ uri: image }}
            style={styles.avatar}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <View style={styles.userInfo}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text style={styles.textBold}>joshua_l</Text>
            <Image source={Icon.Verify} style={styles.verify} />
          </View>
          <Text style={styles.text}>Tokyo, Japan</Text>
        </View>

        <TouchableOpacity style={{ position: "absolute", right: 30 }}>
          <Image source={Icon.More} />
        </TouchableOpacity>
      </View>
      <View>
        <Image
          source={{ uri: postImage2 }}
          style={styles.postImage}
          resizeMode="cover"
        />
        <View>
          <View style={styles.iconContainer}>
            <Like />
            <Comment />
            <Messanger />
          </View>
          <View style={{ position: "absolute", right: 22, top: 12 }}>
            <Save />
          </View>
        </View>
        <View style={styles.commentContainer}>
          <Image source={{ uri: image }} style={styles.commentUser} />
          <Text style={styles.text}>
            Liked by <Text style={styles.textBold}>craig_love</Text> and{" "}
            <Text style={styles.textBold}>44,686 </Text>
            others
          </Text>
        </View>
        <Text
          style={[styles.text, { marginLeft: 6, marginTop: 6 }]}
          numberOfLines={2}
        >
          joshua_l The game in Japan was amazing and I want to share some photos
        </Text>
      </View>
    </View>
  );
};

export default PostCard;
