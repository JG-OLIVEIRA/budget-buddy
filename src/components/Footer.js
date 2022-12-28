import { StyleSheet, Button, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footerView}>
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
      <Button
        title="Press me"
        onPress={() => Alert.alert("Simple Button pressed")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  footerView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
