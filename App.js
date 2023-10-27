import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';
import ViewEmployees from "./Screens/ViewEmployees/ViewEmployees";
import ManagePackage from "./Screens/ManagePackage/ManagePackage";
import {useEffect, useState} from "react";
import SplashScreen from "./Screens/SplashScreen/SplashScreen";
import * as Font from "expo-font";
import COLORS from "./constants/COLORS";


const Stack  = createNativeStackNavigator();
const App = () => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const loadFonts = async () => {
            await  Font.loadAsync({
                'Roboto-Regular': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
                'Roboto-Bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
                'Lobster-Two': require('./assets/fonts/Lobster-Two/lobster-two-latin-400-normal.ttf'),
                'Raleway-Bold-Mid': require('./assets/fonts/Raleway/raleway-latin-600-normal.ttf'),
                'Amarante-Regular': require('./assets/fonts/Amarante/amarante-latin-400-normal.ttf'),
                'Plus-Jakarta-Sans-Bold': require('./assets/fonts/Plus-Jakarta-Sans/plus-jakarta-sans-latin-500-normal.ttf'),
                'Edu-NSW-Act-Foundation-Bold': require('./assets/fonts/Edu-NSW-Act-Foundation/edu-nsw-act-foundation-latin-700-normal.ttf'),
                'Cinzel-Regular': require('./assets/fonts/Cinzel/cinzel-latin-400-normal.ttf'),
                'Cinzel-Bold': require('./assets/fonts/Cinzel/cinzel-latin-700-normal.ttf'),
                // Add more font files here as needed
            });
        }
        loadFonts().then(() => setIsReady(true));
    }, []);

    if (!isReady) {
        return <SplashScreen />;
    }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={
          {
              headerStyle: {
                  backgroundColor: COLORS.primary,
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                  fontWeight: 'bold',
              },}
      }>
          <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }}/>
          <Stack.Screen name={"ViewEmployees"} component={ViewEmployees} options={{title: 'View Employees'}}/>
          <Stack.Screen name="ManagePackage" component={ManagePackage} options={{title: 'Manage Package'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;