import { Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Fonts, Colors } from "../../utils";

const { width } = Dimensions.get('screen')

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    indexText: {
        fontSize: 16,
        lineHeight: 30,
        fontFamily: Fonts.SemiBold,
        marginBottom: 28,
        marginTop: 8,
        width: width,
        paddingHorizontal: 22,
        alignSelf: 'flex-end',
    },
    containerFlatList: {
        alignItems: 'center',
        paddingBottom: 27,
    },
    item: {
        backgroundColor: Colors.white,
        width: 166,
        height: 136,
        margin: 7.5,
        borderRadius: 5,
        justifyContent: 'space-around',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 1.41,
        elevation: 2,
    },
    icon: {
        width: 49,
        height: 49,
        borderRadius: 49,
        borderWidth: 1,
        borderColor: Colors.secondary,
        alignSelf: 'center',
        marginTop: 12.5,
        marginBottom: 2.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: Fonts.SemiBold,
        color: Colors.black,
        marginHorizontal: 5,
        textAlign: 'center',
    },
})

export default styles;