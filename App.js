import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import CartItems from "./CartItems";
import InvoiceItems from "./InvoiceItems";
import CardItems from "./CardItems";

class App extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20
          }}
        >
          Welcome!
        </Text>

        <Button
          title="Go to Cart"
          onPress={() => this.props.navigation.navigate("items")}
        />
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
  }
});

const AppNavigator = createStackNavigator(
  {
    home: App,
    items: CartItems,
    invoice: InvoiceItems,
    card: CardItems
  },

  {
    initialRouteName: "home"
  }
);

export default createAppContainer(AppNavigator);
