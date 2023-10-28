import {StyleSheet} from "react-native";
import DIMENSIONS from "../../../constants/DIMENSIONS";

const EmployeeDetailCardStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 15,
        elevation: 20,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    moreDetailsBtn: {
        flex:1,
        alignItems: 'center',
    }

});
export default EmployeeDetailCardStyles;