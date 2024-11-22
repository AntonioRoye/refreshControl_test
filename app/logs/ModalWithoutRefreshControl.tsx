import React from "react";
import { Text, StyleSheet, Button, Alert } from "react-native";
import { RefreshControl, ScrollView } from "react-native-gesture-handler";

const ModalWithoutRefreshControl = () => {
  return (
    <ScrollView
      /*  refreshControl={<RefreshControl refreshing={false} onRefresh={()=>{}}/>} */
      style={styles.container}
    >
      <Button
        title="Click for alert"
        onPress={() => Alert.alert("Clicked", "Modal is not frozen")}
      ></Button>
      <Text style={styles.text}> Button works on this page, only difference is the refreshControl property is commented out</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    padding: 20
  }
});

export default ModalWithoutRefreshControl;
