import React from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FlatList, StyleSheet, Text, View } from "react-native";

import { Button } from "../components/Button";
import { Header } from "../components/Header";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
import { EnviromentButton } from "../components/EnviromentButton";

export function PlantSelect() {
  return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header />
          <Text style={styles.title}>Em qual ambiente</Text>
          <Text style={styles.subtitle}>você quer colocar sua planta?</Text>
        </View>
        <View>
          <FlatList
            data={[1, 2, 3, 4, 5]}
            renderItem={({ item }) => (
              <EnviromentButton title="Cozinha" active/>
              
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.environmentList}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    textAlign: "center",
    lineHeight: 20,
    paddingVertical: 10,
    color: colors.heading,
  },
  emoji: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
  },
  environmentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
});