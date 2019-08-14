import React from "react";
import { StyleSheet, Text, View, Card, ListItem } from "react-native";

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("itemId", "NO-ID");
    const title = navigation.getParam("title", "NO-TITLE");
    const YearOfRelease = navigation.getParam(
      "YearOfRelease",
      "NO-YearOfRelease"
    );
    return (
      <View style={styles.container}>
        <Text style={styles.item}>itemId: {JSON.stringify(itemId)}</Text>
        <Text style={styles.item}>title: {JSON.stringify(title)}</Text>
        <Text style={styles.item}>
          YearOfRelease: {JSON.stringify(YearOfRelease)}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20
  }
});
