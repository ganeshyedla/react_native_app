import React, { Component } from "react";
import data from "./data.json";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import { DataTable } from "react-native-paper";

export default class CartItems extends Component {
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

  Table2 = id => {
    let items = data.filter(item => item.id === id);

    let invoiceItems = [];
    items.map(item => {
      item.products.map(i => {
        invoiceItems.push(i);
      });
    });

    this.props.navigation.navigate("invoice", {
      invoiceItems: invoiceItems,
      items: items
    });
  };
  render() {
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
            <DataTable.Cell style={styles.htext}>Company</DataTable.Cell>
            <DataTable.Cell style={styles.htext}>ID</DataTable.Cell>
            <DataTable.Cell style={styles.htext}>Cost</DataTable.Cell>
          </DataTable.Row>
          {data.map(i => {
            return (
              <DataTable.Row
                key={i.id}
                onPress={() => {
                  this.Table2(i.id);
                }}
              >
                <DataTable.Cell>{i.companyName}</DataTable.Cell>
                <DataTable.Cell>{i.companyId}</DataTable.Cell>
                <DataTable.Cell>{"$" + i.cost}</DataTable.Cell>
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
    justifyContent: "center"
  },
  head: {
    height: 40,
    backgroundColor: "powderblue",
    alignItems: "center"
  },
  htext: { fontSize: 20, fontWeight: "bold" }
});
