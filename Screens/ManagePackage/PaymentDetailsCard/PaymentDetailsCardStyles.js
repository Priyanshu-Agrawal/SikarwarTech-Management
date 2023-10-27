import {StyleSheet} from "react-native";
import COLORS from "../../../constants/COLORS";

const PaymentDetailsCardStyles = StyleSheet.create({
    card:{
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 50,
    },
    cardHeader: {
        flexDirection: "row",
        borderBottomWidth:3,
        borderColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 5,
        marginBottom: 10,
    },
    headerText: {
        color: COLORS.primary,
        fontWeight: "bold",
        fontSize: 16,
    },
    paymentItem:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
    }
})
export default PaymentDetailsCardStyles;