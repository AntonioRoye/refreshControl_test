import React from "react";
import { Text, StyleSheet, Button, Alert } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const ModalWithRefreshControl = () => {
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }
      style={styles.container}
    >
      <Button
        title="Click for alert"
        onPress={() => Alert.alert("Clicked", "Modal is not frozen")}
      ></Button>

      <Text style={styles.text}> See how you can't click the button, nothing works on this page no matter what you do{"\n\n"}</Text>
      <Text style={styles.text}> The only thing that works is swiping down to dismiss the modal but you have to swipe from above this modal screen, in the area between this screen and the one behind it</Text>
    </ScrollView>
  );
};

export default ModalWithRefreshControl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    padding: 20
  }
});
