import {StyleSheet} from "react-native";
import COLORS from "../../constants/COLORS";
import DIMENSIONS from "../../constants/DIMENSIONS";

const LoginFormStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: DIMENSIONS.third,
        alignItems: "center",
        width: DIMENSIONS.max,
        paddingHorizontal: 20,
        maxWidth: 500,
    },
    headerText: {
        fontSize: 30,
        // fontWeight: "bold",
        marginBottom: 5,
        color: COLORS.primary_text,
        fontFamily: "Raleway-Bold-Mid",
    },
    headerSecondaryText: {
        fontSize: 18,
        fontWeight: "bold",
        color: COLORS.secondary_text,
    },
    inputFormContainer: {
        width: DIMENSIONS.max,
        marginTop: 20,
    },
    inputContainer: {
        backgroundColor: COLORS.input_background,
        borderRadius: 15,
        borderColor: COLORS.primary,
        borderWidth: DIMENSIONS.hairlineWidth,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        paddingVertical: 18,
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        fontSize: 16,
        flexGrow: 1,
    },
    button: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        marginTop: 25,
        marginHorizontal: 20,
        paddingVertical: 25,
        alignItems: "center",
    },
    buttonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
    }
})
export default LoginFormStyle;