import { ScaledSheet } from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
    },
    inputContainer: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: "center",
        height: 44,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#C6C6C6",
        paddingHorizontal: 11,
    },
    input: {
        flex: 1,
        height: "100%",
        paddingHorizontal: 11,
    },
    label: {
        marginBottom: 10,
        fontSize: 16,
        fontWeight: '500'
    },
})

export default styles;