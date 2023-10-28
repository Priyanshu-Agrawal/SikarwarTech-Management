import {useEffect, useState} from "react";
import axios from "axios";
import {Text, View} from "react-native";
import PaymentDetailsCardStyles from "./PaymentDetailsCardStyles";
import moment from "moment";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const PaymentDetailsCard = ({employee}) => {
    const [paymentDetails, setPaymentDetails] = useState(null);
    const [loaders, setLoaders] = useState({});
    useEffect(() => {
        getPaymentDetails().then(() => {
            setLoaders({getPaymentDetails: false})
        })
    }, []);

    const getPaymentDetails = async () => {
        setLoaders({getPaymentDetails: true});
        const response = await axios.post(`${API_URL}/call/CheckPaymentDetails`,{
            "params": [ employee.EmpID ]
        });
        if (response.data){
            if (response.data[0].Message === "Payments found"){
                setPaymentDetails(response.data.sort((a, b) => new Date(b.PaymentDate) - new Date(a.PaymentDate)));
            }else{
                setPaymentDetails(null);
            }
        }
    }

    return(
        <>
            {loaders.getPaymentDetails && <Text>Loading...</Text>}
            {paymentDetails ? (
                    <View style={PaymentDetailsCardStyles.card}>
                        <View style={PaymentDetailsCardStyles.cardHeader}>
                            <Text style={PaymentDetailsCardStyles.headerText}>Payment Details</Text>
                            <Text style={PaymentDetailsCardStyles.headerText}>{paymentDetails[0].RecordCount}</Text>
                        </View>
                        <View style={PaymentDetailsCardStyles.cardBody}>
                            {paymentDetails.map((payment, index) => (
                                <View key={index} style={PaymentDetailsCardStyles.paymentItem}>
                                    <View style={PaymentDetailsCardStyles.rowDetails}>
                                        <Text style={PaymentDetailsCardStyles.cardBodyRowText}>{payment.PaymentMode} : </Text>
                                        <Text style={PaymentDetailsCardStyles.cardBodyRowText}>{payment.PaymentAmount}</Text>
                                    </View>
                                    <View style={PaymentDetailsCardStyles.rowDate}>
                                        <Text style={PaymentDetailsCardStyles.cardBodyRowText}>{moment(payment.PaymentDate).format("Do MMM YYYY")}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                ) : null
            }
        </>
    );
}
export default PaymentDetailsCard;