import React from "react";
import { Text, StyleSheet } from "react-native";
import {
  RectButton,
  RectButtonProps,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import { SvgFromUri } from "react-native-svg";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  };
}

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <GestureHandlerRootView>
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri uri={data.photo} width={70} height={70} />
        <Text style={styles.text}>{data.name}</Text>
      </RectButton>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.shape,
    borderRadius: 20,
    paddingVertical: 10,
    alignItems: "center",
    margin: 10,
  },
  text: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
    marginVertical: 16,
  },
});
