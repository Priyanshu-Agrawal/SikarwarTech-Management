import {StyleSheet} from "react-native";
import COLORS from "../../../constants/COLORS";
import DIMENSIONS from "../../../constants/DIMENSIONS";

const FindAndListEmployeeStyles = StyleSheet.create({
    searchCardContainer: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 30,
    },
    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 5,
    },
    searchInputText: {
        flexGrow: 1,
    },
    searchResultContainer: {
        paddingHorizontal: 10,
        borderTopWidth: 1,
        marginTop:10
    },
    searchResultItem: {
        flexDirection: "row",
        borderBottomWidth: DIMENSIONS.hairlineWidth,
        paddingVertical: 10,
        paddingHorizontal: 2,
    },
    searchResultItemEmployeeID: {
        fontWeight: "500",
        marginRight: 10,
        width: 50,
    }
});
export default FindAndListEmployeeStyles;