import * as React from "react";
import { StyleSheet, Button } from "react-native";
import { useSDK } from "react-sdk";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const { useCart } = useSDK();
  const { addToCart, removeFromCart } = useCart;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Button onPress={() => addToCart("123456")} title="Add To Cart" />
      <Button
        onPress={() => removeFromCart("123456")}
        title="Remove From Cart"
      />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
