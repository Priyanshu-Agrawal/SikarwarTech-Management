import {useEffect, useState} from "react";
import {ActivityIndicator, Text, View} from "react-native";
import axios from "axios";
import SelectedEmployeeDetailsStyles from "./SelectedEmployeeDetailsStyles";
import ShowPackage from "./ShowPackage/ShowEmployeePackage";
import AddPackage from "./AddPackage/AddPackage";
import SECRETS from "../../../constants/SECRETS";
import COLORS from "../../../constants/COLORS";


const API_URL = SECRETS.API_URL;
const SelectedEmployeeDetails = ({employee, setIsPackageExists}) => {
    const [employeePackage, setEmployeePackage] = useState(null);
    const [loaders, setLoaders] = useState({});

    useEffect(() => {
        getEmployeePackages().then();
    }, [employee]);


    const getEmployeePackages = async () => {
        setLoaders({getEmployeePackages: true})
        const response = await axios.post(`${API_URL}/call/CheckEmployeePackage`,{
            "params": [ employee.EmpID ]
        })
        if (response.data){
            setLoaders({getEmployeePackages: false})
            setIsPackageExists(false);
            response.data[0].Message === "Package found" ? setEmployeePackage(response.data[0]) : setEmployeePackage(null);
            response.data[0].Message === "Package found" ? setIsPackageExists(true) : setIsPackageExists(false);
        }
    };

    return(
        <View>
            <View style={SelectedEmployeeDetailsStyles.cardHeader}>
                <Text style={[SelectedEmployeeDetailsStyles.headerText, SelectedEmployeeDetailsStyles.headerTextID]}>{employee.EmpID}</Text>
                <Text style={[SelectedEmployeeDetailsStyles.headerText, SelectedEmployeeDetailsStyles.headerTextName]}>{employee.Empname}</Text>
            </View>
            {loaders.getEmployeePackages ? (
                    <ActivityIndicator color={COLORS.primary}/>
                ) : ( employeePackage ? (
                            <ShowPackage employeePackage={employeePackage} getEmployeePackage={getEmployeePackages}/>
                        ) : (
                            <AddPackage employee={employee} getEmployeePackage={getEmployeePackages}/>
                        )
                )
            }
        </View>
    )
}

export default SelectedEmployeeDetails;