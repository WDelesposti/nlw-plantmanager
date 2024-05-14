import React from "react";
import { Welcome } from "./src/pages/Welcome";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.preventAutoHideAsync();

  return <Welcome />;
}
