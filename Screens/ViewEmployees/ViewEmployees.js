import {ActivityIndicator, ScrollView, View} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import EmployeeDetailCard from "./EmployeeDetailCard/EmployeeDetailCard";
import SECRETS from "../../constants/SECRETS";
import COLORS from "../../constants/COLORS";

const API_URL = SECRETS.API_URL;
const ViewEmployees = () => {
    const [loaders, setLoaders] = useState({});
    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        const response = await axios.get(`${API_URL}/table/employee`)
        setEmployees(response.data);
    }

    useEffect(() => {
        setLoaders({employees: true});
        fetchEmployees().then(() => setLoaders({employees: false}));
    }, []);

    return (
        ( loaders.employees ? (
                <View style={{flex: 1,alignItems:"center", justifyContent:"center"}}>
                    <ActivityIndicator color={COLORS.primary} size={50}/>
                </View>
            ):(
                <ScrollView>
                    {employees && employees.map((employee) =>  (
                            <EmployeeDetailCard key={employee.EmpID} employee={employee} />
                        ))
                    }
                </ScrollView>
            )
        )
    );
}

export default ViewEmployees;