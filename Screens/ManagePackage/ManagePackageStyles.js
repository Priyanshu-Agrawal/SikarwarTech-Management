import {StyleSheet} from "react-native";
import DIMENSIONS from "../../constants/DIMENSIONS";
import COLORS from "../../constants/COLORS";

const ManagePackageStyles = StyleSheet.create({
    root: {
        width:DIMENSIONS.max,
        height:DIMENSIONS.max,
        padding: 20,
        flex: 1,
    },
    mainCard: {
        backgroundColor: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 20,
        marginHorizontal: 20,
        marginTop: 30,
    },
    backButton: {
        alignSelf: "flex-end",
        position: "absolute",
        height: 100,
        width: 100,
        padding:50,
        paddingTop: 10,
        paddingRight: 15,
    }
})
export default ManagePackageStyles;