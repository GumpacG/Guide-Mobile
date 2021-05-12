import React, { Component } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";

import arrowDownImg from "../icons/ArrowDown.png";
import arrowUpImg from "../icons/ArrowUp.png";
import DropDownItem from "../components/DropDownItem";
import colors from "../config/colors";
import fontSizes from "../config/fontSizes";
import data from "../data";

// Main options for the screens
export default class OptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.option,
      area: this.props.area,
      expanded: false,
      navigation: this.props.navigation,
    };
  }

  // Helper function for mapping over the dropdown list
  getDropDownList() {
    let items = data[this.state.option];

    if (this.state.option === "Areas" || this.state.option === "Lists") {
      items = data[this.state.option];
    } else if (this.state.option === "Sub-Areas") {
      items = data[this.state.option][this.state.area];
    }

    return items.map((area) => (
      <DropDownItem
        navigation={this.state.navigation}
        item={area}
        key={area}
        option={this.state.option}
      />
    ));
  }

  onPressHandler = () => {
    // Only expand for Areas and List
    if (
      this.state.option === "Areas" ||
      this.state.option === "Lists" ||
      this.state.option === "Sub-Areas"
    ) {
      this.setState({ expanded: !this.state.expanded });
    } else {
      this.state.navigation.navigate(this.state.option, {
        area: this.state.area,
      });
    }
  };

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
              ? styles.options_expand
              : styles.options_compress
          }
          onPress={this.onPressHandler}
        >
          <Text style={styles.options_text}>{this.state.option}</Text>
          {this.state.option === "Areas" ||
          this.state.option === "Lists" ||
          this.state.option === "Sub-Areas" ? (
            // Only show arrows for Areas and Lists since they are the only dropdown lists
            <Image
              resizeMode="contain"
              style={styles.options_arrow}
              source={this.state.expanded ? arrowUpImg : arrowDownImg}
            />
          ) : null}
        </TouchableOpacity>

        <ScrollView>
          {this.state.expanded ? this.getDropDownList() : null}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  options_container_expand: {
    top: 20,
    height: "40%",
    marginVertical: "2%",
    backgroundColor: "white",
    borderRadius: 13,
    borderWidth: 2,
    borderColor: colors.options_buttons,
  },
  options_container_compress: {
    top: 20,
    height: "10%",
    marginVertical: "2%",
  },
  options_expand: {
    backgroundColor: colors.options_buttons,
    width: "90%",
    height: "24%",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  options_compress: {
    backgroundColor: colors.options_buttons,
    width: "90%",
    height: "100%",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  options_text: {
    color: "black",
    paddingLeft: "5%",
    fontSize: fontSizes.options_text,
    flex: 1,
  },
  options_arrow: {
    width: "50%",
    height: "50%",
    flex: 0.15,
  },
});
