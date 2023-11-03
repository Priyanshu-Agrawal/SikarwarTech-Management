import COLORS from "../../constants/COLORS";
import DIMENSIONS from "../../constants/DIMENSIONS";

const DashboardPageStyle = {
    screenContainer: {
        flex: 1,
        backgroundColor: COLORS.primary,
    },
    headerContainer:{
        padding: 20,
        paddingTop: 30,
    },
    headerTopContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    userNameText:{
        fontSize: 20,
        // fontWeight: 'bold',
        color: COLORS.white,
        fontFamily:'Plus-Jakarta-Sans-Bold',
    },
    headerBottomContainer:{
        marginTop: 40,
        paddingEnd: 20,
    },
    pageDescriptionText:{
        fontSize: 24,
        // fontWeight: 'bold',
        color: COLORS.white,
        lineHeight: 30,
        fontFamily:'Plus-Jakarta-Sans-Bold',
    },
    bodyContainer:{
        flex: 1,
        backgroundColor: COLORS.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
    },
    actionCardContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        height: 150,
        backgroundColor: COLORS.white,
        borderRadius: 25,
        borderWidth: DIMENSIONS.hairlineWidth,
        borderColor: COLORS.primary,
        elevation:5,
    },
    actionCardDetails:{
        flex: 1,
    },
    actionCardDetailsTitle:{
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 10,
        color: COLORS.primary,
    },
    actionCardDetailsDescription:{
        margin: 5,
        marginHorizontal: 10,
        fontSize: 16,
        color: COLORS.secondary_text,
    }
}
export default DashboardPageStyle;