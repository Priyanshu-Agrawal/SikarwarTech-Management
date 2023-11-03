import {ActivityIndicator, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";
import SECRETS from "../../constants/SECRETS";
import axios from "axios";
// import {sortByProperty} from "../../Utilities/ArrayUtils";
import TableModel from "./TableModel";
import tableModel from "./TableModel";
import ViewTransactionsStyles from "./ViewTransactionsStyles";
import COLORS from "../../constants/COLORS";
import saveJSON from "../../Utilities/savejsonCSV";

const API_URL = SECRETS.API_URL;

const ViewTransactions = () => {
    /*TODO
    * Better table styling
    * Add sorting
    * Add filtering
    * Add search
    * !Fixing Bug
    *
    * */


    const[loaders, setLoaders] = useState({});
    const [fetchedTransactions, setFetchedTransactions] = useState(null);
    const [organizedTransactions, setOrganizedTransactions] = useState(null);
    const fetchTransactions = async() => {
        const response = await axios.get(`${API_URL}/table/paymentDetails`);
        console.log(response.data);
        if(response.data) {
            setFetchedTransactions(response.data);
            setOrganizedTransactions(response.data)
        }
    };
    useEffect(() => {
        setLoaders({...loaders, isLoading: true});
        fetchTransactions().then(() => {
            // console.log("Fetched transactions");
            // console.log(fetchedTransactions);
            // if(sortByProperty(fetchedTransactions, "PaymentDate", "desc").length === fetchedTransactions.length){
            //     setOrganizedTransactions(sortByProperty(fetchedTransactions, "PaymentDate", "desc"));
            // }
            // // setOrganizedTransactions(fetchedTransactions);
            // console.log("Organized transactions");
            // console.log(organizedTransactions);
            setLoaders({...loaders, isLoading: false});
        })
    }, []);

    if (loaders.isLoading){
        return(
            <View style={{flex: 1,alignItems:"center", justifyContent:"center"}}>
                <ActivityIndicator color={COLORS.primary}  size={50}/>
            </View>
        )
    }else{
        return(
            organizedTransactions && organizedTransactions.length > 0  ? (
                    <View style={ViewTransactionsStyles.rootView}>
                        <View style={ViewTransactionsStyles.topSection}>
                            <Text>{organizedTransactions.length } transactions found</Text>
                            <TouchableOpacity  style={ViewTransactionsStyles.exportBtn} onPress={() => saveJSON(organizedTransactions)} >
                                <Text style={ViewTransactionsStyles.exportBtnText}>Export</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView>
                            <ScrollView horizontal={true}>
                            <View>
                                <View style={[ViewTransactionsStyles.row,ViewTransactionsStyles.header]}>
                                    {TableModel.map((item, index) => (
                                        <View key={index} style={[ViewTransactionsStyles.cell, {width: item.width}]}>
                                            <Text adjustsFontSizeToFit minimumFontScale={0.5} numberOfLines={1} allowFontScaling={true} >{item.name}</Text>
                                        </View>
                                    ))}
                                </View>
                                <View>
                                    {organizedTransactions.map((transaction, index) => (
                                        <View key={index} style={ViewTransactionsStyles.row}>
                                            { tableModel.map((item, index) => (
                                            <View key={index} style={[ViewTransactionsStyles.cell, {width: item.width}]}>
                                                <Text>{transaction[item.value]}</Text>
                                            </View>
                                            ))}
                                        </View>
                                    ))}
                                </View>
                            </View>
                        </ScrollView>
                        </ScrollView>
                    </View>
                ): (
                    <View style={{flex:1, alignItems:"center", justifyContent:"center"}}>
                        <Text>No transactions found</Text>
                    </View>
                )
        )
    }
}
export default ViewTransactions;