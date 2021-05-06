import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DropDownList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
    };
  }

  render() {
    return (
      <View>
        <Text> DropDownList </Text>
      </View>
    );
  }
}
