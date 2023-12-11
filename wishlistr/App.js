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
      primary: "#edff00",
      background: "#111",
      card: "#dfdfdf",
      text: "#000",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };
  const DarkMode = {
    dark: true,
    colors: {
      primary: "#edff00",
      background: "#000",
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
            <StatusBar style="light" />
          </PaperProvider>
        </UserContext.Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
