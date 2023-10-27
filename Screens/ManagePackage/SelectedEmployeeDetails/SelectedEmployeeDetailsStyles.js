import {StyleSheet} from "react-native";
import COLORS from "../../../constants/COLORS";

const SelectedEmployeeDetailsStyles = StyleSheet.create({
    cardHeader: {
        flexDirection: "row",
        borderBottomWidth:5,
        borderColor: COLORS.primary,
        alignItems: "center",
        paddingBottom: 10,
        marginBottom: 10,
    },
    headerText: {
        color: COLORS.primary,
        fontWeight: "bold",
        fontSize: 20,
    },
    headerTextID: {
        paddingEnd:2.5,
        fontSize: 18,
        borderRightWidth: 1,
        borderColor:COLORS.primary,
    },
    headerTextName: {
        paddingStart:5,
        fontVariant: "small-caps",
    }
});
export default SelectedEmployeeDetailsStyles;