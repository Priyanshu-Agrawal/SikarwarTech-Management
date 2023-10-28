import {Text, TouchableOpacity, View} from "react-native";
import EmployeeDetailCardStyles from "./EmployeeDetailCardStyles";
import {FontAwesome5} from "@expo/vector-icons";
import COLORS from "../../../constants/COLORS";
import {useState} from "react";
const EmployeeDetailCard = ({employee}) => {
    const [showMore, setShowMore] = useState(false);
    return (
        <View style={EmployeeDetailCardStyles.container}>
            <View style={EmployeeDetailCardStyles.header}>
                <Text>{employee.EmpID}</Text>
                <Text>{employee.Empname}</Text>
            </View>
            <View>
                <Text>{employee.Designation}</Text>
                <Text>{employee.DOJ}</Text>
                <TouchableOpacity style={EmployeeDetailCardStyles.moreDetailsBtn} onPress={() => setShowMore(!showMore)}>
                    <FontAwesome5 name={showMore? "angle-up" : "angle-down" } size={24} color={COLORS.primary} />
                </TouchableOpacity>
                {showMore && (
                    <View>
                        <Text>More Details Here</Text>
                    </View>
                )}
                <View>

                </View>
            </View>
        </View>
    )
}
export default EmployeeDetailCard;