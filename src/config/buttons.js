import colors from "./colors";
import fontSizes from "./fontSizes";

export default {
  options_expand: {
    backgroundColor: colors.options_buttons,
    width: "90%",
    height: "20%",
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
};
