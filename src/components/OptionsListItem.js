import React, { Component } from "react";
import { TouchableOpacity, Image, View, StyleSheet, Text } from "react-native";

import ArrowDown from "../icons/ArrowDown.png";
import ArrowUp from "../icons/ArrowUp.png";
import buttons from "../config/buttons";


export default class OptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.option,
      expanded: false,
    };
  }

  getDropDownList() {
    return <Text style={buttons.options_text}>{this.state.option}</Text>;
  }

  render() {
    return (
      <View
        style={
          this.state.expanded
            ? styles.options_container_expand
            : styles.options_container_compress
        }
      >
        <TouchableOpacity
          style={
            this.state.expanded
              ? buttons.options_expand
              : buttons.options_compress
          }
          onPress={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <Text style={buttons.options_text}>{this.state.option}</Text>
          <Image
            resizeMode="contain"
            style={buttons.options_arrow}
            source={this.state.expanded ? ArrowUp : ArrowDown}
          />
        </TouchableOpacity>
        {this.state.expanded ? this.getDropDownList() : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  options_container_expand: {
    top: 20,
    height: "50%",
    marginVertical: "2%",
    backgroundColor: "white",
    borderRadius: 10,
  },
  options_container_compress: {
    top: 20,
    height: "10%",
    marginVertical: "2%",
  },
});
