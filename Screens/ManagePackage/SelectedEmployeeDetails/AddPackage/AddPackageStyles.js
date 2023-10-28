import {StyleSheet} from "react-native";
import COLORS from "../../../../constants/COLORS";

const AddPackageStyles = StyleSheet.create({
    inputContainer: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 15,
    },
    button: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingVertical: 20,
        marginVertical: 5,
    },
    buttonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
        marginHorizontal: 10,
    },
    datePicker: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    }
})

export default AddPackageStyles;