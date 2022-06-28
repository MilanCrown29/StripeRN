import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import { StyleSheet, Text, View ,StatusBar} from "react-native";
import Payment from "./component/Payment";

export default function App() {
  return (
    <View style={styles.container}>
      <StripeProvider publishableKey="pk_test_51KvgkWSHAYlXMV9r2Xhu30mtHcEEwF8b2hpr4Im7EVKV6G3jdbp69PnUgzKY9RWWoHOS3w98k9dqg3WCe574j7nG00F3JreqfL">
        <Payment />
      </StripeProvider>
      <StatusBar style="auto" />
    </View>
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
