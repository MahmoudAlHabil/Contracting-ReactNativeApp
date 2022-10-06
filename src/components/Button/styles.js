import { ScaledSheet } from 'react-native-size-matters';
import Colors from '../../utils/Colors';
import Fonts from '../../utils/Fonts';

const styles = ScaledSheet.create({
    button: {
        borderRadius: 15,
        height: 44,
        width: 151,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    },
    title: {
        fontSize: 18,
        color: Colors.white,
        fontFamily: Fonts.Medium,
    },
    iconStyle: {
        width: 16,
        height: 16,
    }
})

export default styles;