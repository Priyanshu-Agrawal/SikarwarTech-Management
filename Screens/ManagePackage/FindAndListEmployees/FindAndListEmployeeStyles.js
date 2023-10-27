import {StyleSheet} from "react-native";
import COLORS from "../../../constants/COLORS";

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
        marginTop: 5,
        padding: 10,
        borderTopWidth: 1,
    },
    searchResultItem: {
        flexDirection: "row",
    },
    searchResultItemEmployeeID: {
        fontWeight: "bold",
        marginRight: 10,
        width: 50,
    }
});
export default FindAndListEmployeeStyles;