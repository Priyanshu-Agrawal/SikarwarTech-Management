import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import DashboardPageStyle from "./DashboardPageStyle";
import {AntDesign} from "@expo/vector-icons";
import COLORS from "../../constants/COLORS";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import DashboardActions from "./DashboardActions";
import DIMENSIONS from "../../constants/DIMENSIONS";

const Dashboard = ({navigation}) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            if (await AsyncStorage.getItem('userToken') && await AsyncStorage.getItem('user') ) {
                setUser(JSON.parse(await AsyncStorage.getItem('user')))
            }
        })()
        }, []);
    if (!user) {
        return(
            <Text>Loading...</Text>
        )
    }
    return (
        <View style={DashboardPageStyle.screenContainer}>
            <View style={DashboardPageStyle.headerContainer}>
                <View style={DashboardPageStyle.headerTopContainer}>
                    <Text style={DashboardPageStyle.userNameText}>{user.FirstName + " " + user.LastName}</Text>
                    <TouchableOpacity onPress={async () => {
                        await AsyncStorage.clear().then(navigation.replace('Login'))
                    }}>
                        <AntDesign name="logout" size={24} color={COLORS.white} />
                    </TouchableOpacity>
                </View>
                <View style={DashboardPageStyle.headerBottomContainer}>
                    <Text style={DashboardPageStyle.pageDescriptionText}>Employee Management Portal</Text>
                </View>
            </View>
            {/*<View >*/}
                <ScrollView  style={DashboardPageStyle.bodyContainer} showsVerticalScrollIndicator={false}>
                    {DashboardActions.map((action, index) => (
                        <TouchableOpacity key={index} style={DashboardPageStyle.actionCardContainer} onPress={() => navigation.navigate(action.targetScreen)}>
                            <View style={{width: DIMENSIONS.third, alignItems:"center"}}>
                                <AntDesign name={action.icon} size={24} color={COLORS.primary} />
                            </View>
                            <View style={DashboardPageStyle.actionCardDetails} >
                                <Text style={DashboardPageStyle.actionCardDetailsTitle}>{action.title}</Text>
                                <Text style={DashboardPageStyle.actionCardDetailsDescription}>{action.description}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            {/*</View>*/}
        </View>
    );
}
export default Dashboard;