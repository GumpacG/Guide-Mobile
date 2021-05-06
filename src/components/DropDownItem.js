import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
    };
  }

  render() {
    return (
      <View>
        <Text> {this.state.item} </Text>
      </View>
    );
  }
}
