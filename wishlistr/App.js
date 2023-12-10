import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNav from "./src/navigations/MainNav";
import { useState } from "react";
import WishlistNav from "./src/navigations/WishlistNav";
import ProfileNav from "./src/navigations/ProfileNav";

export default function App() {
  const [user, setUser] = useState(false);

  return (
    <QueryClientProvider client={new QueryClient()}>
      <NavigationContainer>
        <MainNav />
      </NavigationContainer>

      {/* <Text>Hello</Text> */}
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
