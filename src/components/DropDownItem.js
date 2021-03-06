import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

import colors from "../config/colors";
import fontSizes from "../config/fontSizes";

// Dropdown item components that navigates to a screen according to the selected item
export default class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      option: this.props.option,
    };
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.items}
        onPress={() => {
          if (this.state.option === "Areas") {
            this.props.navigation.navigate("Area", { area: this.state.item });
          } else if (this.state.option === "Sub-Areas") {
            this.props.navigation.navigate("Sub-Area", {
              area: this.state.item,
            });
          }
        }}
      >
        <Text style={styles.item_text}> {this.state.item} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  items: {
    backgroundColor: colors.dropdown_list_text,
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
