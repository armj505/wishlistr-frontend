import React, { useEffect } from "react";
import { Button, View } from "react-native";
import * as Notifications from "expo-notifications";

const NotificationExample = () => {
  useEffect(() => {
    // Set up notification handler
    const notificationHandler = Notifications.addNotificationReceivedListener(
      (notification) => {
        console.log("Notification received:", notification);
      }
    );

    return () => {
      Notifications.removeNotificationSubscription(notificationHandler);
    };
  }, []);

  //   const handlePress = async () => {
  //     // Schedule a notification for 5 seconds from now
  //     await Notifications.scheduleNotificationAsync({
  //       content: {
  //         title: "My Notification",
  //         body: "This is a test notification!",
  //       },
  //       trigger: {
  //         seconds: 5,
  //       },
  //     });
  //   };

  return (
    <View>
      {/* <Button title="Create Notification" onPress={handlePress} /> */}
    </View>
  );
};

export default NotificationExample;
