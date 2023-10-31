import {StyleSheet} from "react-native";

const ViewTransactionsStyles = StyleSheet.create({
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
    cell:{
        paddingVertical: 5,
        paddingHorizontal: 10,
        width:150,
    },
    rootView: {
        paddingBottom: 20
    }
})

export default ViewTransactionsStyles;