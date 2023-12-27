import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import MainNav from "./src/navigations/MainNav";
import { useEffect, useState } from "react";
import AuthNav from "./src/navigations/AuthNav";
import { checkToken, getToken } from "./src/apis/store";
import UserContext from "./src/context/UserContext";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

export default function App() {
  const scheme = useColorScheme();
  const [user, setUser] = useState(false);
  const checkToken_ = async () => {
    setUser(await checkToken());
  };
  useEffect(() => {
    checkToken_();
  }, []);

  const LightMode = {
    dark: false,
    colors: {
      primary: "#fac260",
      background: "#faf7ec",
      gradient: "#fac260",
      header: "#eee",
      card: "#fff",
      text: "#000",
      textMainBar: "#fff",
      textMainBackground: "#8a8b8a",
    },
  };
  const DarkMode = {
    dark: true,
    colors: {
      primary: "#ffcc00",
      background: "#000",
      header: "#03031a",
      card: "#202020",
      text: "#fff",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={new QueryClient()}>
        <UserContext.Provider value={{ user, setUser }}>
          <PaperProvider>
            <NavigationContainer
              theme={scheme === "dark" ? DarkMode : LightMode}
            >
              {user ? <MainNav /> : <AuthNav />}
            </NavigationContainer>
            <Toast />
            <StatusBar style="auto" animated />
          </PaperProvider>
        </UserContext.Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
