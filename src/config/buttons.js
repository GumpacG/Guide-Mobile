import colors from "./colors";
import fontSizes from "./fontSizes";

export default {
  options: {
    backgroundColor: colors.secondary,
    width: "90%",
    height: "8%",
    alignItems: "center",
    marginVertical: "2%",
    borderRadius: 10,
    flexDirection: "row",
  },
  options_text: {
    color: "white",
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
