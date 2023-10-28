import {Text, TextInput, TouchableOpacity, View} from "react-native";
import FindAndListEmployeeStyles from "./FindAndListEmployeeStyles";
import {debounce} from "lodash";
import axios from "axios";
import {useState} from "react";
import {AntDesign} from "@expo/vector-icons";
import COLORS from "../../../constants/COLORS";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const FindAndListEmployees = ({onEmployeeSelect}) => {
    const [matchingEmployees, setMatchingEmployees] = useState(null);
    const [loaders, setLoaders] = useState({});

    const handleEmployeeSearch = debounce( (query) => {

        if(query.length < 3){
            setMatchingEmployees(null)
            setLoaders({searching: false})
            return
        }
        setLoaders({searching: true})
        const searchEmployees = async () => {
            const response = await axios.get(`${API_URL}/table/employee?Empname='${query}'`)
            if (response.data){
                return response.data;
            }
        };
        searchEmployees().then( response => {
            setMatchingEmployees(response)
            setLoaders({searching: false})
        });
    }, 500 );


    return(
        <View >
            <>
                <View style={FindAndListEmployeeStyles.searchInputContainer}>
                    <TextInput style={FindAndListEmployeeStyles.searchInputText} placeholder="Search for an employee" onChangeText={s => handleEmployeeSearch(s)} />
                    <AntDesign name={loaders.searching? "loading1" : "search1"} size={18} color={COLORS.primary} />
                </View>
                {matchingEmployees ? (
                    <View style={FindAndListEmployeeStyles.searchResultContainer}>
                        {matchingEmployees.length > 0 ? (matchingEmployees.map( employee => (
                            <TouchableOpacity style={FindAndListEmployeeStyles.searchResultItem} key={employee.EmpID} onPress={() => onEmployeeSelect(employee)}>
                                <Text style={FindAndListEmployeeStyles.searchResultItemEmployeeID}>{employee.EmpID}</Text>
                                <Text>{employee.Empname}</Text>
                            </TouchableOpacity>
                            ))) : (
                            <View >
                                <Text>No results found</Text>
                            </View>
                        )
                        }
                    </View>
                    ) : null
                }
            </>
        </View>
    )
}
export default FindAndListEmployees;