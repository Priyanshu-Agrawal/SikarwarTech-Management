import {ScrollView, Text} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";
import EmployeeDetailCard from "./EmployeeDetailCard/EmployeeDetailCard";
import SECRETS from "../../constants/SECRETS";

const API_URL = SECRETS.API_URL;
const ViewEmployees = () => {
    const [loaders, setLoaders] = useState({});

    /* Dummy Data
        [
            {"EmpID":1,"Empname":"RAJESH CHAUHAN","EmpCode":"AAA-000","EmpAddress":"A-42 Gali N-1 Sec-87","PFACCNo":"","Designation":"Sales Manager","PANCard":"ABCDE1233A","PaidDays":"0","ElAfter":"0","UanNo":"","ElBalance":"","CreatedDate":"2021-09-28T14:00:17.603Z","Isactive":true,"DOJ":"2021-03-01T00:00:00.000Z","DOB":"1983-02-04T00:00:00.000Z","Contact_number":null,"E_mail":null,"Pin_Code":null,"releavingDate":null},
            {...},
        ]
    */

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
        <ScrollView>
            {loaders.employees && <Text>Loading...</Text>}
            {employees && employees.map((employee) =>  (
                    <EmployeeDetailCard key={employee.EmpID} employee={employee} />
                )
            )}
        </ScrollView>
    );
}

export default ViewEmployees;