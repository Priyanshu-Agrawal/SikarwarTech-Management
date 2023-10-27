import {View, TouchableOpacity, ScrollView} from "react-native";
import {useState} from "react";
import FindAndListEmployees from "./FindAndListEmployees/FindAndListEmployees";
import ManagePackageStyles from "./ManagePackageStyles";
import SelectedEmployeeDetails from "./SelectedEmployeeDetails/SelectedEmployeeDetails";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import PaymentDetailsCard from "./PaymentDetailsCard/PaymentDetailsCard";

const ManagePackage = () => {
    const [employee, setEmployee] = useState(null);
    const [isPackageExists, setIsPackageExists] = useState(false);

    return(
        <ScrollView style={ManagePackageStyles.root}>
            <View style={ManagePackageStyles.mainCard}>
                { employee ? (
                        <TouchableOpacity style={ManagePackageStyles.backButton} onPress={() => {setEmployee(null); setIsPackageExists(false)}}>
                            <View>
                                <Ionicons name="close-circle-outline"  size={35} color={COLORS.primary} />
                            </View>
                        </TouchableOpacity>
                    ): null
                }
                {employee ? (
                        <SelectedEmployeeDetails employee={employee} setIsPackageExists={(bool) => setIsPackageExists(bool)}/>
                    ) : (
                        <FindAndListEmployees onEmployeeSelect={(emp) => setEmployee(emp)}/>
                    )
                }
            </View>
            {employee && isPackageExists ?(
                    <PaymentDetailsCard employee={employee}/>
                ) : null
            }
        </ScrollView>
    )
}
export default ManagePackage;