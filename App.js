import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Footer from "./src/components/Footer";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
});
