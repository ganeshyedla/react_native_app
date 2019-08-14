import React, { Component } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { DataTable } from "react-native-paper";

export default class InvoiceItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => {
      this.setState({ isLoading: false });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handle = (data, index) => {
    this.props.navigation.navigate("card", {
      invoiceItems: invoiceItems,
      data: data,
      Index: index,
      ID: data.pid
    });
    console.log("index ::", index);
  };

  render() {
    const { navigation } = this.props;

    invoiceItems = navigation.getParam("invoiceItems", "NO-invoiceItems");

    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    } else {
      return (
        <DataTable>
          <DataTable.Row style={styles.head}>
            <DataTable.Cell>PID</DataTable.Cell>
            <DataTable.Cell>Product</DataTable.Cell>
            <DataTable.Cell>Quantity</DataTable.Cell>
            <DataTable.Cell>Cost</DataTable.Cell>
          </DataTable.Row>
          {invoiceItems.map((i, index) => {
            return (
              <DataTable.Row
                key={index}
                onPress={() => {
                  this.handle(i, index);
                }}
              >
                <DataTable.Cell>{i.pid}</DataTable.Cell>
                <DataTable.Cell>{i.productName}</DataTable.Cell>
                <DataTable.Cell>{i.quantity}</DataTable.Cell>
                <DataTable.Cell>{i.cost}</DataTable.Cell>
              </DataTable.Row>
            );
          })}
        </DataTable>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  head: {
    height: 40,
    backgroundColor: "powderblue",
    alignItems: "center"
  },
  htext: { fontSize: 20, fontWeight: "bold" }
});
