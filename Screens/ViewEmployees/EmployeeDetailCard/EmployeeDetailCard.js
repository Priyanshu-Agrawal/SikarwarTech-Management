import {Text, TouchableOpacity, View} from "react-native";
import EmployeeDetailCardStyles from "./EmployeeDetailCardStyles";
import {FontAwesome5} from "@expo/vector-icons";
import COLORS from "../../../constants/COLORS";
import moment from "moment";
import axios from "axios";
import SECRETS from "../../../constants/SECRETS";
import {useState} from "react";
import {useNavigation} from "@react-navigation/native";

const API_URL = SECRETS.API_URL;
const EmployeeDetailCard = ({employee}) => {
    const navigation = useNavigation();
    const [loaders, setLoaders] = useState({});
    const [moreDetails, setMoreDetails] = useState(null);
    const [expanded, setExpanded] = useState(false);
    const fetchMoreDetails = async ()=> {
        const response = await axios.get(`${API_URL}/table/EmployeePackage?EmpID='${employee.EmpID}'`);
        setMoreDetails(response.data[0] ?? {})
    };
    const handleExpandBtnClick = () => {
        setLoaders({moreDetails: true}) ||
        fetchMoreDetails().then(() => {
            setLoaders({moreDetails: false});
            setExpanded(true);
        })
    }

    const handleMoreBtnClick = () => {
        navigation.navigate('ManagePackage', {employee});
    }

    return (
        <View style={EmployeeDetailCardStyles.container}>
            <TouchableOpacity style={EmployeeDetailCardStyles.moreDetailsBtn} onPress={handleMoreBtnClick}>
                <FontAwesome5 name="caret-right" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <View style={EmployeeDetailCardStyles.header}>
            {/*<FontAwesome5 name="user" size={24} color={COLORS.primary} />*/}
                <Text style={EmployeeDetailCardStyles.textID}>{employee.EmpID}</Text>
                <Text style={EmployeeDetailCardStyles.textName}>{employee.Empname}</Text>
            </View>
            <View style={EmployeeDetailCardStyles.body}>
                <Text>{employee.Designation}</Text>
                <Text>Joining: {moment(employee.DOJ).format('Do MMM YYYY')}</Text>
                <TouchableOpacity style={EmployeeDetailCardStyles.expandDetailsBtn} onPress={ () => {
                    !expanded ? (
                        moreDetails ? setExpanded(true) : handleExpandBtnClick()
                    ) : setExpanded(false)
                }}>

                    {loaders.moreDetails ?
                            <FontAwesome5 name={loaders.moreDetails ? "spinner" : expanded ? "chevron-up" : "chevron-down" } size={16} color={COLORS.primary} />
                        :
                            <Text style={EmployeeDetailCardStyles.expandDetailsBtnText}>Show {expanded ? "Less": "More"}</Text>
                    }
                </TouchableOpacity>
                {expanded && (
                    <View>
                        <Text>Package: {moreDetails?.Package ?? "Not Set"} </Text>
                    </View>
                )}
            </View>
        </View>
    )
}
export default EmployeeDetailCard;