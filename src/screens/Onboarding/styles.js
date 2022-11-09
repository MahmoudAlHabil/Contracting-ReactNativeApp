import { ScaledSheet } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: Colors.white,
    borderColor: Colors.primary,
    borderWidth: 1,
    width: 80,
    height: 40,
    borderRadius: 8,
    alignSelf: "flex-end",
    bottom: 20,
    right: 20,
  },
  title: {
    color: Colors.primary,
    fontFamily: Fonts.SemiBold,
  },
  dots: {
    bottom: 200,
  },
  dotsContentContainerStyle: {
    justifyContent: "center",
    flex: 1,
  },
});

export default styles;
