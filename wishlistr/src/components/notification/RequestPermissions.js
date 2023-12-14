import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import * as Device from "expo-device";
import Constants from "expo-constants";
const NotificationPermission = ({ setExpoPushToken }) => {
  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      console.log("STEP 1");
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      console.log("STEP 2");
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      console.log("STEP 3");
      if (finalStatus !== "granted") {
        alert("Failed to get push token for push notification!");
        return;
      }
      console.log("STEP 4-1");
      console.log(Constants.expoConfig.extra.eas.projectId);
      console.log("STEP 4-2");
      token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });
      console.log("STEP 5");
      console.log({ "the tpoken ": token });
    } else {
      alert("Must use physical device for Push Notifications");
    }

    return token.data;
  }

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => {
      console.log({ "THE TOKEN ": token });
      return setExpoPushToken(token);
    });
  }, []);
  return (
    // Your component JSX<>
    <></>
  );
};

export default NotificationPermission;
