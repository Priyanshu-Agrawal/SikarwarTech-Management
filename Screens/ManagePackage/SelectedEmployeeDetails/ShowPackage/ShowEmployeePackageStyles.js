import COLORS from "../../../../constants/COLORS";
import {StyleSheet} from "react-native";
import DIMENSIONS from "../../../../constants/DIMENSIONS";

const ShowEmployeePackageStyles = StyleSheet.create({
    valuesContainer: {
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: COLORS.primary,
        borderRadius: 15,
        justifyContent: "space-between",
        alignItems: "center",
    },
    valuesText: {
        fontSize: 16,
    },
    addAmountPaid: {
        flexDirection: "row",
        alignItems: "center",
    },
    paymentDatePicker: {
        width: DIMENSIONS.max,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    addPaymentButton: {
        backgroundColor: COLORS.primary,
        borderRadius: 15,
        paddingVertical: 20,
        marginVertical: 5,
        alignItems: "center",
    },
    addPaymentButtonText: {
        fontSize: 16,
        color: COLORS.white,
        fontWeight: "bold",
    },
});
export default ShowEmployeePackageStyles;