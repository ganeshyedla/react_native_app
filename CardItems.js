import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableNativeFeedback
} from "react-native";
import { Card, CardTitle, CardContent } from "react-native-card-view";

export default class CardItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Index: this.props.navigation.getParam("Index", "NO-Index"),
      ID: this.props.navigation.getParam("ID", "NO-ID"),
      data: this.props.navigation.getParam("data", "NO-data"),
      invoiceItems: this.props.navigation.getParam(
        "invoiceItems",
        "NO-invoiceItems"
      )
    };
    this.clickNext = this.clickNext.bind(this);
    this.clickPrev = this.clickPrev.bind(this);
  }

  clickNext = targetId => {
    const item = this.state.invoiceItems.filter(
      item => item.pid === targetId
    )[0];
    this.setState({
      data: item,
      ID: targetId,
      Index: this.state.Index + 1
    });
  };
  clickPrev = targetId => {
    const item = this.state.invoiceItems.filter(
      item => item.pid === targetId
    )[0];
    this.setState({
      data: item,
      ID: targetId,
      Index: this.state.Index - 1
    });
  };

  render() {
    const data = this.state.data;
    console.log("State INDEX", this.state.Index);
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 2,
            alignItems: "stretch",
            backgroundColor: "powderblue",
            justifyContent: "flex-start"
          }}
        >
          <Card>
            <CardContent>
              <Text style={styles.titleText}>PID:</Text>
              <Text style={styles.subText}>{data.pid}</Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text style={styles.titleText}>Name:</Text>

              <Text style={styles.subText}>{data.productName}</Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text style={styles.titleText}>Cost:</Text>

              <Text style={styles.subText}>{data.cost}</Text>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Text style={styles.titleText}>Quantity:</Text>

              <Text style={styles.subText}>{data.quantity}</Text>
            </CardContent>
          </Card>
        </View>

        <View>
          <Text>{"\n"}</Text>
        </View>

        <View
          style={{
            paddingTop: 10,
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 40
          }}
        >
          <Button
            title="Previous"
            color="black"
            style={{ width: 50, height: 50 }}
            disabled={this.state.Index === 0 ? true : false}
            onPress={() => this.clickPrev(this.state.ID - 1)}
          />
          <Text>{"\t"}</Text>
          <Button
            title="Back To Cart"
            color="black"
            onPress={() => {
              this.props.navigation.navigate("items");
            }}
          />
          <Text>{"\t"}</Text>
          <Button
            title="    Next    "
            color="black"
            style={{ width: 50, height: 50 }}
            disabled={
              this.state.Index === this.state.invoiceItems.length - 1
                ? true
                : false
            }
            onPress={() => this.clickNext(this.state.ID + 1)}
          />
          <Text>{"\n"}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  },

  titleText: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold"
  },

  button1: {
    marginLeft: 10
  },
  button2: {
    marginRight: 10
  },
  subText: {
    alignSelf: "center",
    fontSize: 20
  }
});
