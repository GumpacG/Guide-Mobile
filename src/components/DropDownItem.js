import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import fontSizes from "../config/fontSizes";

export default class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    return (
      <TouchableOpacity style={styles.items}>
        <Text style={styles.item_text}> {this.state.item} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: "#bcb8b1", //d6cfcb
    left: "5%",
    height: "40%",
    width: "90%",
    justifyContent: "center",
    marginVertical: "1%",
    borderRadius: 10,
    flex: 1,
  },
  item_text: {
    fontSize: fontSizes.dropdown_item,
    marginLeft: "2%",
    marginBottom: "2%",
    marginTop: "2%",
  },
});
