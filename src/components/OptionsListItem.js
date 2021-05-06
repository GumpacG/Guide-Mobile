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

export default class OptionsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option: this.props.option,
      expanded: false,
    };
  }

  getDropDownList() {
    const items = [
      "Porteau Cove",
      "Furry Creek",
      "Murrin Park",
      "Shannon Falls",
      "The Grand Wall",
      "Apron Boulders",
      "The North Walls",
      "Smoke Bluffs",
      "Coho Park",
      "The Powerlines",
      "Cat Lake",
      "Paradise Valley",
      "Whistler Creekside Boulder",
      "Green River Baston",
      "Other Areas",
    ];
    return items.map((item) => <DropDownItem item={item} key={item} />);
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
              ? styles.options_expand
              : styles.options_compress
          }
          onPress={() => {
            this.setState({ expanded: !this.state.expanded });
          }}
        >
          <Text style={styles.options_text}>{this.state.option}</Text>
          <Image
            resizeMode="contain"
            style={styles.options_arrow}
            source={this.state.expanded ? arrowUpImg : arrowDownImg}
          />
        </TouchableOpacity>
        <ScrollView>
          {this.state.expanded && this.state.option === "Areas"
            ? this.getDropDownList()
            : null}
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
