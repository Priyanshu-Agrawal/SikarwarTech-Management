import {StyleSheet} from "react-native";
import DIMENSIONS from "../../constants/DIMENSIONS";
import COLORS from "../../constants/COLORS";

const AddEmployeeStyles = StyleSheet.create({
    formContainer: {
        padding: 20,
        backgroundColor: COLORS.white,
        margin: 20,
        borderRadius: 15,
        elevation: 10,
        // borderWidth: DIMENSIONS.hairlineWidth,
        borderColor: COLORS.primary,
    },
    subForm: {
        borderWidth: DIMENSIONS.hairlineWidth,
        borderColor: COLORS.primary,
        borderRadius: 10,
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginVertical: 20,
    },
    subFormLabel: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.primary,
        position: 'absolute',
        top: -15,
        left: 10,
        backgroundColor: COLORS.white,
        paddingHorizontal: 5,
    },
    textInputBox: {
        borderWidth: DIMENSIONS.hairlineWidth * 0.5,
        borderColor: COLORS.primary,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
    },
    valuesText: {
        fontSize: 14,
    },
    datePickerBox:{
        borderWidth: DIMENSIONS.hairlineWidth * 0.5,
        borderColor: COLORS.primary,
        borderRadius: 5,
        marginVertical: 5,
        paddingHorizontal: 10,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnAddEmployee: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        padding: 15,
        paddingVertical: 25,
        alignItems: 'center',
        borderRadius: 15,
    },
    textBtnAddEmployee: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    }
});
export default AddEmployeeStyles