import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Wallace</Text>
      </View>
      <Image
        source={{
          uri: "https://avatars.githubusercontent.com/u/85360273?s=400&u=5afd9e2fc2ee188bc1c64a5c4077137e8e8b9301&v=4",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
});
