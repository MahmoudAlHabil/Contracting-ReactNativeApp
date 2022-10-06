import { ScaledSheet } from "react-native-size-matters";
import { Colors, Fonts } from "../../utils";

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    image: {
        alignSelf: 'center',
        marginTop: 70,
        marginBottom: 78,
    },
    boldText: {
        marginHorizontal: 60,
        marginBottom: 10,
        fontSize: 22,
        lineHeight: 37,
        fontFamily: Fonts.bold,
        alignSelf: 'flex-start',
    },
    text: {
        marginHorizontal: 60,
        fontSize: 22,
        lineHeight: 37,
        fontFamily: Fonts.Regular,
        alignSelf: 'flex-start',
    }
})

export default styles;