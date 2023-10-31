import {Alert, Text, TextInput, TouchableOpacity, View} from "react-native";
import ShowEmployeePackageStyles from "./ShowEmployeePackageStyles";
import moment from "moment";
import {Feather, FontAwesome, Ionicons} from "@expo/vector-icons";
import COLORS from "../../../../constants/COLORS";
import React, {useState} from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import RNDateTimePicker from "@react-native-community/datetimepicker";
import axios from "axios";
import SECRETS from "../../../../constants/SECRETS";

const API_URL = SECRETS.API_URL;
const ShowEmployeePackage = ({employeePackage, getEmployeePackage}) => {
    const [loaders, setLoaders] = useState({});
    const [showAddAmount, setShowAddAmount] = useState(false);
    const [showPaymentDatePicker, setShowPaymentDatePicker] = useState(false);
    const [paymentDetails, setPaymentDetails] = useState({});

    let paymentModes = [
        {key:'1', value:'Cash'},
        {key:'2', value:'Cheque'},
        {key:'3', value:'NEFT'},
        {key:'4', value:'UPI'},
    ];

    const validateInputValues = () => {
        let isValid = true
        Object.entries(paymentDetails).forEach(([key, value]) => {
            if (value === "") {
                isValid = false;
                Alert.alert("Please fill all the fields: " + key);
            }
        })
        return isValid;
    }

    const savePayment = async () => {
        setLoaders({savePayment: true})
        if (validateInputValues()){
            const response = await axios.post(`${API_URL}/call/InsertPaymentDetails`,{
                "params": [ employeePackage.EmpID, paymentDetails.paymentAmount, paymentDetails.paymentMode, paymentDetails.paymentDate ]
            })
            if (response.data){
                setShowAddAmount(false);
                setLoaders({savePayment: false})
                getEmployeePackage();
            }
        }
    }

    return (
        <View>
            <View style={ShowEmployeePackageStyles.valuesContainer}>
                <Text style={ShowEmployeePackageStyles.valuesText}>Package</Text>
                <Text style={ShowEmployeePackageStyles.valuesText}>{employeePackage.Package}</Text>
            </View>
            <View style={ShowEmployeePackageStyles.valuesContainer}>
                <Text style={ShowEmployeePackageStyles.valuesText}>Monthly Pay</Text>
                <Text style={ShowEmployeePackageStyles.valuesText}>{employeePackage.MonthlyToPay}</Text>
            </View>
            <View style={ShowEmployeePackageStyles.valuesContainer}>
                <Text style={ShowEmployeePackageStyles.valuesText}>Total Pay</Text>
                <Text style={ShowEmployeePackageStyles.valuesText}>{employeePackage.TotalPay}</Text>
            </View>
            <View style={ShowEmployeePackageStyles.valuesContainer}>
                <Text style={ShowEmployeePackageStyles.valuesText}>Offer Date</Text>
                <Text style={ShowEmployeePackageStyles.valuesText}>{moment(employeePackage.OfferLetterDate).format("Do MMM YYYY")}</Text>
            </View>
            <View style={ShowEmployeePackageStyles.valuesContainer}>
                <Text style={ShowEmployeePackageStyles.valuesText}>Amount Paid</Text>
                <TouchableOpacity style={ShowEmployeePackageStyles.addAmountPaid} onPress={() => setShowAddAmount(!showAddAmount)}>
                    <Text style={ShowEmployeePackageStyles.valuesText}>{employeePackage.AmountPaid}</Text>
                    {loaders.savePayment ? (
                            <FontAwesome name="spinner" size={24} color={COLORS.primary} />
                        ):(
                            <Feather name={showAddAmount? "chevron-up" : "plus-square"} size={24} color={COLORS.primary} />
                        )
                    }
                </TouchableOpacity>
            </View>
            {showAddAmount ? (
                    <View>
                        <View style={ShowEmployeePackageStyles.valuesContainer}>
                            <TextInput placeholderTextColor={COLORS.secondary_text} style={[ShowEmployeePackageStyles.valuesText, {flex:1}]} placeholder={"Payment Amount"} keyboardType={"numeric"} onChangeText={s => setPaymentDetails({...paymentDetails, "paymentAmount": s})}/>
                        </View>
                        <View>
                            <SelectList
                                setSelected={(s) => setPaymentDetails({...paymentDetails, "paymentMode": s})}
                                data={paymentModes}
                                save="value"
                                boxStyles={[ShowEmployeePackageStyles.valuesContainer, {paddingVertical: 23}]}
                                inputStyles={[ShowEmployeePackageStyles.valuesText, {color: paymentDetails.paymentMode? COLORS.primary_text : COLORS.secondary_text}]}
                                placeholder="Payment Mode"
                                searchPlaceholder={"Search Payment Mode"}
                                search={false}
                            />
                        </View>
                        <View style={ShowEmployeePackageStyles.valuesContainer}>
                            <TouchableOpacity style={ShowEmployeePackageStyles.paymentDatePicker} onPress={()=> {setShowPaymentDatePicker(false); setShowPaymentDatePicker(true)}}>
                                <Text style={[ShowEmployeePackageStyles.valuesText, {color: paymentDetails.paymentDate? COLORS.primary_text : COLORS.secondary_text}]}>
                                    {paymentDetails.paymentDate? paymentDetails.paymentDate.toDateString() : "Payment Date"}
                                </Text>
                                <Ionicons name={"calendar-outline"} size={25} color={COLORS.primary} />
                            </TouchableOpacity>
                            {showPaymentDatePicker ? (
                                <RNDateTimePicker
                                    testID="dateTimePicker"
                                    value={paymentDetails.offerDate ? paymentDetails.paymentDate : new Date()}
                                    mode={'date'}
                                    onChange={(event,selectedDate) => {
                                        setShowPaymentDatePicker(false)
                                        setPaymentDetails({...paymentDetails, "paymentDate": selectedDate})
                                    }}
                                />
                            ) : null
                            }
                        </View>
                        <TouchableOpacity style={ShowEmployeePackageStyles.addPaymentButton} onPress={() => savePayment()}>
                            {loaders.savingPackage ? <FontAwesome name="spinner" size={24} color={COLORS.white} /> : null  }
                            <Text style={ShowEmployeePackageStyles.addPaymentButtonText}>Add</Text>
                        </TouchableOpacity>
                    </View>
                ) : null
            }
        </View>
    )
}
export default ShowEmployeePackage;