import {StyleSheet} from "react-native";
import COLORS from "../../constants/COLORS";
import DIMENSIONS from "../../constants/DIMENSIONS";

const ViewTransactionsStyles = StyleSheet.create({
    rootView: {
        paddingBottom: 20
    },
    topSection: {
        alignItems:"center",
        justifyContent: "space-between",
        flexDirection:"row",
        paddingHorizontal:10,
        paddingVertical:5
    },
    exportBtn:{
        flexDirection:"row"
    },
    exportBtnText: {
        paddingVertical:5,
        paddingHorizontal:10,
        color:COLORS.primary,
        borderWidth: DIMENSIONS.hairlineWidth,
        borderRadius:20,
        borderColor:COLORS.primary,
    },
    header:{
        fontWeight: "bold",
        backgroundColor: "lightgray",
        borderRadius: 5,
        paddingVertical: 15,
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5,
    },
    cell: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 150,
    }

})

export default ViewTransactionsStyles;