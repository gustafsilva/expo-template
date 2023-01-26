import React from "react";
import { StyleSheet } from "react-native";

import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return <Text {...props} style={[props.style, styles.text]} />;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "space-mono",
  },
});
