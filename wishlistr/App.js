import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNav from "./src/navigations/MainNav";
import { useEffect, useState } from "react";
import AuthNav from "./src/navigations/AuthNav";
import { checkToken, getToken } from "./src/apis/store";
import UserContext from "./src/context/UserContext";
import { PaperProvider } from "react-native-paper";
import Toast, { ToastProvider } from "react-native-toast-message";

export default function App() {
  const [user, setUser] = useState(false);
  const checkToke = async () => {
    setUser(await checkToken());
  };
  useEffect(() => {
    checkToke();
  }, []);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <UserContext.Provider value={{ user, setUser }}>
        <PaperProvider>
          <NavigationContainer>
            {user ? <MainNav /> : <AuthNav />}
          </NavigationContainer>
          <Toast />
        </PaperProvider>
      </UserContext.Provider>
    </QueryClientProvider>
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
