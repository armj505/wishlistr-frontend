import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Screen = ({ children }) => {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: colors.background,
        flex: 1,
        paddingTop: insets.top + 24,
        paddingBottom: insets.bottom + 24,
        paddingLeft: insets.left + 16,
        paddingRight: insets.right + 16,
        // paddingHorizontal: 16,
        // paddingVertical: 24,
      }}
    >
      {children}
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({});
