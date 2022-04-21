import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";
import React from "react";
import styles from "./styles";
import { Icon } from "../../constant";

const image =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";

const StoryLine = () => {
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.wrapper} activeOpacity={0.6}>
            <Image source={Icon.Oval} style={styles.oval} />
            <View style={styles.userStoryImageCover}>
              <Image
                source={{ uri: image }}
                resizeMode="cover"
                style={styles.userStoryImage}
              />
            </View>
            <Text style={styles.text} numberOfLines={1}>
              Your Story
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
};

export default StoryLine;
