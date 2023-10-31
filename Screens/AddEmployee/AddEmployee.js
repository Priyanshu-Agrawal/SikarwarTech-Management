import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import FormDataModel from "./FormDataModel";
import React, {useEffect, useState} from "react";
import {AntDesign, Ionicons} from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import AddEmployeeStyles from "./AddEmployeeStyles";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import axios from "axios";
import SECRETS from "../../constants/SECRETS";

const API_URL = SECRETS.API_URL;

const AddEmployee = ({navigation}) => {
    const [loaders, setLoaders] = useState({});
    const [values, setValues] = useState({});
    const [toggles, setToggles] = useState({});

    const handleChange = (e, valueName) => {
        e !== '' ? setValues({...values, [valueName]: e}): setValues({...values, [valueName]: null});
    }

    const validateInputs = () => {
        let isValid = true;
        FormDataModel.map(subCategory => {
            subCategory.fields.map(field => {
                if(field.required && !values[field.valueName]){
                    console.log(field.label + ' is required');
                    isValid = false;
                }
            })
        })
        return isValid;
    }
    const handleSubmit = () => {
        setLoaders({...loaders, submit: true})
        if(validateInputs()){
            saveData().then(() => {
                setLoaders({...loaders, submit: false})
                setValues({})
                navigation.navigate("ViewEmployees")
            })
        }else{
            console.log('Please fill all the required fields');
        }
        setLoaders({...loaders, submit: false})
    }

    const saveData = async() => {
        const response = await axios.post(`${API_URL}/table/employee`, values);
        console.log(response.data);
    }

    useEffect(() => {
        console.log('values');
        console.log(values);
    }, [values]);

    /*TODO:
    * Add Expandable Hidden SubCategory
    * Adding Validation
    * */

    const handleToggle = (valueName) => {
        setToggles({...toggles, [valueName]: true});
    };
    return(
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={AddEmployeeStyles.formContainer}>
                {FormDataModel.map((subCategory, index) => (
                    subCategory.subCategoryLabel && subCategory.expanded && (
                        <View style={AddEmployeeStyles.subForm} key={index}>
                            <Text style={AddEmployeeStyles.subFormLabel}>{subCategory.subCategoryLabel}</Text>
                            {subCategory.fields.map((field, index) => (
                                <View key={index}>
                                    {field.viewType === 'textInput' && (
                                        <View style={AddEmployeeStyles.textInputBox}>
                                            <TextInput placeholderTextColor={COLORS.secondary_text} style={AddEmployeeStyles.valuesText} placeholder={field.label} value={values[field.valueName]} keyboardType={field.keyboardType} maxLength={field.maxLength} onChangeText={e => handleChange(e, field.valueName)}/>
                                        </View>
                                    )}
                                    {field.viewType === 'datePicker' && (
                                        <>
                                            <TouchableOpacity style={AddEmployeeStyles.datePickerBox} onPress={() => handleToggle(field.valueName)}>
                                                <Text style={[AddEmployeeStyles.valuesText,{color: values[field.valueName] ? COLORS.primary_text : COLORS.secondary_text}]}>
                                                    {values[field.valueName] ? moment(values[field.valueName]).format("Do MMM YYYY")  : field.label}
                                                </Text>
                                                <Ionicons name={"calendar-outline"} size={24} color={COLORS.primary} />
                                            </TouchableOpacity>
                                            {toggles[field.valueName] && (
                                                <RNDateTimePicker
                                                    testID="dateTimePicker"
                                                    value={values[field.valueName] ? new Date(values[field.valueName]) : new Date()}
                                                    mode={'date'}
                                                    onChange={(event, date) => {
                                                        setToggles({...toggles, [field.valueName]: false});
                                                        handleChange(moment(date), field.valueName);
                                                    }}
                                                />
                                            )}
                                        </>
                                    )}
                                </View>
                            ))}
                        </View>
                    )
                ))}
                <TouchableOpacity disabled={loaders.submit} style={AddEmployeeStyles.btnAddEmployee} onPress={() => handleSubmit()}>
                    <AntDesign name={loaders.sumbit? "loading1" : "adduser"} size={24} color={COLORS.white} />
                    <Text style={AddEmployeeStyles.textBtnAddEmployee}>Add Employee</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default AddEmployee;