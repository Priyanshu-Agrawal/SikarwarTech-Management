import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import LoginFormStyle from "./LoginFormStyle";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from "../../constants/COLORS";
import {FontAwesome, Ionicons} from "@expo/vector-icons";
import SECRETS from "../../constants/SECRETS";

const API_URL = SECRETS.API_URL ;
const Login = ({navigation}) => {
    const [loaders, setLoaders] = useState({});
    const [inValidInputs, setInValidInputs] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hidePass, setHidePass] = useState(true);


    useEffect(() => {
        checkAsyncStorage().then().catch( e => console.log(e));
    }, []);

    const checkAsyncStorage = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
            setIsLoggedIn(true);
            navigation.replace('Dashboard');
        }
    };

    isLoggedIn && console.log("User is logged in");

    const validateInputs = () => {
        let isValid = true;
        const tempInValidInput = {}
        if (username === "") {
            tempInValidInput.username = true
            isValid = false;
        }
        if (password === "") {
            tempInValidInput.password = true
            // alert("Password is required");
            isValid = false;
        }
        setInValidInputs(tempInValidInput)
        return isValid;
    };
    const startAuthentication = async () => {
        const response = await axios.post(`${API_URL}/call/authenticateUser` ,{
            "params": [ username,password ]
        })
        if(response.data) {
            if (response.data.Message === "Login successful") {
                await AsyncStorage.setItem('userToken', response.data.token);
                await AsyncStorage.setItem('user', JSON.stringify(response.data));
                setIsLoggedIn(true);
                navigation.replace('Dashboard');
            }else{
                setInValidInputs({"username": true, "password": true})
            }
        }
    }

    const handleSubmitClick = () => {
        if (validateInputs()){
            setLoaders({login: true});
            startAuthentication().then( () => setLoaders({login: false})).catch(() => setLoaders({login: false}))
        }
    }

    return (
        <View style={LoginFormStyle.container}>
            <Text style={LoginFormStyle.headerText}>Welcome Back!</Text>
            <Text style={LoginFormStyle.headerSecondaryText}>Login to Continue</Text>
            <View style={LoginFormStyle.inputFormContainer}>
                <View style={[LoginFormStyle.inputContainer, inValidInputs.username && {borderColor: COLORS.error}]}>
                    <TextInput style={LoginFormStyle.input} placeholder="Username" value={username}  placeholderTextColor={inValidInputs.username ?  COLORS.error : COLORS.secondary_text}
                               onChangeText={(s) => {
                                   setUsername(s)
                                   setInValidInputs({...inValidInputs, "username": false})
                               }}
                    />
                </View>
                <View style={[LoginFormStyle.inputContainer, inValidInputs.password && {borderColor: COLORS.error}]}>
                    <TextInput style={LoginFormStyle.input} placeholder="Password" value={password} placeholderTextColor={inValidInputs.password ?  COLORS.error: COLORS.secondary_text}
                               secureTextEntry={hidePass} onChangeText={s => {
                                                                                setPassword(s)
                                                                                setInValidInputs({...inValidInputs, "password": false})
                                                                            }}
                    />
                    <TouchableOpacity style={{position: "absolute", right: 20}} onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name={hidePass ? "eye-off" : "eye"} size={24} color={hidePass ? COLORS.secondary_text : COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={LoginFormStyle.button} disabled={loaders.login} onPress={() => handleSubmitClick() }>
                    {loaders.login && <FontAwesome name={"spinner"} size={24} color={COLORS.white} style={{marginRight: 10}}/>}
                    <Text style={LoginFormStyle.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            {/*<Text>API URL: {API_URL}</Text>*/}
        </View>
    );
};
export default Login;