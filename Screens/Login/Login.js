import React, {useEffect, useState} from 'react'
import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import LoginFormStyle from "./LoginFormStyle";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import COLORS from "../../constants/COLORS";
import {FontAwesome, Ionicons} from "@expo/vector-icons";


const API_URL = process.env.EXPO_PUBLIC_API_URL ;
const Login = ({navigation}) => {
    const [loaders, setLoaders] = useState({});

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
        if (username === "") {
            alert("Username is required");
            isValid = false;
        }
        if (password === "") {
            alert("Password is required");
            isValid = false;
        }
        return isValid;
    };
    const startAuthentication = async () => {
        setLoaders({login: true});
        if(validateInputs()) {
            const response = await axios.post(`${API_URL}/call/authenticateUser` ,{
                "params": [ username,password ]
            })
            if(response.data) {
                if (response.data.Message === "Login successful") {
                    await AsyncStorage.setItem('userToken', response.data.token);
                    await AsyncStorage.setItem('user', JSON.stringify(response.data));
                    setIsLoggedIn(true);
                    navigation.replace('Dashboard');
                }
            }
        }
    }

    return (
        <View style={LoginFormStyle.container}>
            <Text style={LoginFormStyle.headerText}>Welcome Back!</Text>
            <Text style={LoginFormStyle.headerSecondaryText}>Login to Continue</Text>
            <View style={LoginFormStyle.inputFormContainer}>
                <View style={LoginFormStyle.inputContainer}>
                    <TextInput style={LoginFormStyle.input} placeholder="Username" value={username} onChangeText={(s) => setUsername(s)}/>
                </View>
                <View style={LoginFormStyle.inputContainer}>
                    <TextInput style={LoginFormStyle.input} placeholder="Password" secureTextEntry={hidePass} value={password} onChangeText={(s) => setPassword(s)}/>
                    <TouchableOpacity style={{position: "absolute", right: 20}} onPress={() => setHidePass(!hidePass)}>
                        <Ionicons name={hidePass ? "eye-off" : "eye"} size={24} color={hidePass ? COLORS.secondary_text : COLORS.primary} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={LoginFormStyle.button} disabled={loaders.login} onPress={() => startAuthentication() }>
                    {loaders.login && <FontAwesome name={"spinner"} size={24} color={COLORS.white} style={{marginRight: 10}}/>}
                    <Text style={LoginFormStyle.buttonText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Login;