import React, { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Jost_400Regular, Jost_600SemiBold } from "@expo-google-fonts/jost";
import * as Font from "expo-font";
import { View } from "react-native";
import * as Notifications from "expo-notifications";

import Routes from "./src/routes/";
import { PlantProps } from "./src/libs/storage";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //     console.log(data);
    //   }
    // );

    // return () => subscription.remove();

    // async function notifications() {
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("NOTIFICAÇÕES AGENDADAS: ", data);
    // }

    // notifications();
    // async function notifications() {
    //   await Notifications.cancelAllScheduledNotificationsAsync();
    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("NOTIFICAÇÕES AGENDADAS: ", data);
    // }
    // notifications();
  }, []);

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
      <Routes />
    </View>
  );
}
