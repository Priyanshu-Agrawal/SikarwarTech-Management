import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import AddPackageStyles from "./AddPackageStyles";
import React, {useEffect, useState} from "react";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import COLORS from "../../../../constants/COLORS";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import SECRETS from "../../../../constants/SECRETS";

const API_URL = SECRETS.API_URL

const AddPackage = ({employee, getEmployeePackage}) => {
    const [loaders, setLoaders] = useState({});
    const [packageDetails, setPackageDetails] = useState({});
    const [showOfferLetterDatePicker, setShowOfferLetterDatePicker] = useState(false);

    useEffect(() => {
        if (packageDetails.package && packageDetails.package !== ""){
            packageDetails.monthlyPay = Math.round((packageDetails.package / 12) * 0.2).toString()
            packageDetails.totalPay = Math.round((packageDetails.package  / 12) * 2).toString()
            setPackageDetails({...packageDetails})
            // console.log(packageDetails)
        }
        if (packageDetails.package === ""){
            packageDetails.monthlyPay = "";
            packageDetails.totalPay = "";
            setPackageDetails({...packageDetails})
        }
    }, [packageDetails.package]);

    const validateInputValues = () => {
        let valid = true;
        Object.entries(packageDetails).forEach(([key, value]) => {
            // console.log(key, value)
            if (value === "") {
                Alert.alert("Please fill all the fields: " + key);
                valid =  false;
            }
        });
        return valid;
    };
    const savePackage = async () => {
        setLoaders({savingPackage: true})
        if (validateInputValues()){
            const response = await axios.post(`${API_URL}/call/AddEmployeePackage`,{
                "params": [ employee.EmpID, packageDetails.package, packageDetails.monthlyPay, packageDetails.totalPay, packageDetails.offerDate ]
            })
            if (response.data){
                getEmployeePackage();
                setLoaders({savingPackage: false})
            }
        }
    };
    return(
        <View>
            <View style={AddPackageStyles.inputContainer}>
                <TextInput placeholderTextColor={COLORS.secondary_text} placeholder="Package"  keyboardType="numeric" value={packageDetails.package} onChangeText={s => setPackageDetails({...packageDetails, "package": s})}/>
            </View>
            <View style={AddPackageStyles.inputContainer}>
                <TextInput placeholderTextColor={COLORS.secondary_text} placeholder="Monthly Pay" keyboardType="numeric" value={packageDetails.monthlyPay} onChangeText={s => setPackageDetails({...packageDetails, "monthlyPay":s})}/>
            </View>
            <View style={AddPackageStyles.inputContainer}>
                <TextInput placeholderTextColor={COLORS.secondary_text} placeholder="Total  Pay" keyboardType="numeric" value={packageDetails.totalPay} onChangeText={s => setPackageDetails({...packageDetails, "totalPay": s})}/>
            </View>
            <View style={AddPackageStyles.inputContainer}>
                <TouchableOpacity style={AddPackageStyles.datePicker} onPress={() => {setShowOfferLetterDatePicker(false); setShowOfferLetterDatePicker(true)}}>
                    {/*<TextInput placeholder="Offer Date"  editable={false} value={packageDetails.offerDate? packageDetails.offerDate.toDateString(): ""} onChangeText={s => setPackageDetails({...packageDetails, "offerDate":s})}/>*/}
                    <Text style={{color:packageDetails.offerDate ? COLORS.primary_text : COLORS.secondary_text}}>{packageDetails.offerDate? packageDetails.offerDate.toDateString(): "Offer Date"}</Text>
                    <Ionicons name={"calendar-outline"} size={25} color={COLORS.primary} style={AddPackageStyles.datePickerIcon}/>
                </TouchableOpacity>
                {showOfferLetterDatePicker ? (
                        <RNDateTimePicker
                            testID="dateTimePicker"
                            value={packageDetails.offerDate ? packageDetails.offerDate : new Date()}
                            mode={'date'}
                            onChange={(event, date) => {
                                setShowOfferLetterDatePicker(false)
                                setPackageDetails({...packageDetails, "offerDate": date})
                            }}
                        />
                    ) : null
                }
            </View>
            <TouchableOpacity style={AddPackageStyles.button} disabled={loaders.savingPackage} onPress={() => savePackage() }>
                {loaders.savingPackage ? <FontAwesome name="spinner" size={25} color={COLORS.white}/> : null}
                <Text style={AddPackageStyles.buttonText}>Save Package</Text>
            </TouchableOpacity>
        </View>
    )
}
export default AddPackage;