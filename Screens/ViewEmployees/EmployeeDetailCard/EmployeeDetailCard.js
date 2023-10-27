import {Text, View} from "react-native";
import EmployeeDetailCardStyles from "./EmployeeDetailCardStyles";
const EmployeeDetailCard = ({employee}) => {
    return (
        <View style={EmployeeDetailCardStyles.container}>
            <View style={EmployeeDetailCardStyles.header}>
                <Text>{employee.EmpID}</Text>
                <Text>{employee.Empname}</Text>
            </View>
            {/*<View>*/}
            {/*<Text></Text>*/}
            {/*</View>*/}
        </View>
    )
}
export default EmployeeDetailCard;