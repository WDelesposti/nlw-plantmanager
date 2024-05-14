import React, { useCallback, useEffect, useState } from "react";
import { Welcome } from "./src/pages/Welcome";
import * as SplashScreen from "expo-splash-screen";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import * as Font from "expo-font";
import { View } from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Jost_400Regular,
          Jost_600SemiBold,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Welcome />
    </View>
  );
}
