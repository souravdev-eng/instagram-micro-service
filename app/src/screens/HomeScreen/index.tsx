import { FlatList, Text, View } from "react-native";
import React from "react";
import styles from "./styles";
import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import StoryLine from "../../components/StoryLine";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <>
            <Header />
            <StoryLine />
          </>
        }
        data={[1, 2, 3, 4, 5]}
        renderItem={({ item, index }) => <PostCard />}
        keyExtractor={(index) => index.toString()}
      />
    </View>
  );
};

export default HomeScreen;
