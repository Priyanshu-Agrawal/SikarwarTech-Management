import {StyleSheet} from "react-native";
import DIMENSIONS from "../../../constants/DIMENSIONS";
import COLORS from "../../../constants/COLORS";

const EmployeeDetailCardStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        elevation: 20,
        backgroundColor: COLORS.white,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 5,
    },
    textID: {
        marginEnd: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    textName:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    body: {
        paddingHorizontal: 5,
        justifyContent: 'space-between',
    },
    expandDetailsBtn: {
        flex:1,
        alignItems: 'center',
    },
    expandDetailsBtnText: {
        borderWidth:DIMENSIONS.hairlineWidth,
        paddingVertical:5,
        paddingHorizontal:10,
        borderRadius:20,
        fontSize:12,
        marginTop:10,
        marginBottom:5,
        color:COLORS.primary,
        borderColor:COLORS.primary
    },
    moreDetailsBtn: {
        height: DIMENSIONS.max,
        position: 'absolute',
        right: 0,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }

});
export default EmployeeDetailCardStyles;