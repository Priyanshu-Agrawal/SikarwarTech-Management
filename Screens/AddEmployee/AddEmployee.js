import {ScrollView, Text, TextInput, TouchableOpacity, View} from "react-native";
import FormDataModel from "./FormDataModel";
import React from "react";
import {Ionicons} from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import AddEmployeeStyles from "./AddEmployeeStyles";

const AddEmployee = () => {
    /*{"Contact_number": null, "CreatedDate": "2021-09-28T14:00:17.603Z", "DOB": "1983-02-04T00:00:00.000Z", "DOJ": "2021-03-01T00:00:00.000Z", "Designation": "Sales Manager", "E_mail": null, "ElAfter": "0", "ElBalance": "", "EmpAddress": "A-42 Gali N-1 Sec-87", "EmpCode": "SIK-108", "EmpID": 1, "Empname": "RAJESH CHAUHAN", "Isactive": true, "PANCard": "AHUPC5607Q", "PFACCNo": "", "PaidDays": "0", "Pin_Code": null, "UanNo": "", "releavingDate": null}*/
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
                                            <TextInput placeholder={field.label} keyboardType={field.keyboardType} maxLength={field.maxLength}/>
                                        </View>
                                    )}
                                    {field.viewType === 'datePicker' && (
                                        <TouchableOpacity style={AddEmployeeStyles.datePickerBox}>
                                            <Text>{field.label}</Text>
                                            <Ionicons name={"calendar-outline"} size={24} color={COLORS.primary} />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            ))}
                        </View>
                    )
                ))}
                <TouchableOpacity style={AddEmployeeStyles.btnAddEmployee}>
                    <Text style={AddEmployeeStyles.textBtnAddEmployee}>Add Employee</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
export default AddEmployee;