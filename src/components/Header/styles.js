import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";

const { width } = Dimensions.get('screen')

const styles = ScaledSheet.create({
    headerShape: {
        width: width,
        height: width,
        borderRadius: width,
        backgroundColor: Colors.primary,
        transform: [{ scaleX: 2 }],
        marginTop: - width / 1.3,
    },
    textHeader: {
        fontSize: 16,
        lineHeight: 30,
        fontFamily: Fonts.bold,
        color: Colors.white,
        position: 'absolute',
        alignSelf: 'center',
        bottom: 12,
    }
})

export default styles