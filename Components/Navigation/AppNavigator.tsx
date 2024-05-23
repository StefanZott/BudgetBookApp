// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------

// ---------------------------------------------Navigation----------------------------------------------------------
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigatorScreenParams, NavigationContainer } from "@react-navigation/native"

// -----------------------------------------------Screens-----------------------------------------------------------
import StartScreen from "../Screens/StartScreen/StartScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";

// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              RootStack                                                        |
// |_______________________________________________________________________________________________________________|
export type RootStackParams = {
    Start: undefined;
    Login: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParams>()

const RootNavigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator initialRouteName='Start'>
                <RootStack.Screen
                    name='Start'
                    component={StartScreen}
                    options={{
                        headerShown: false
                    }}
                    listeners={() => ({
                        focus: () => console.log('EVENT: RootNavigator -> Open Start Screen')
                    })} />
                <RootStack.Screen
                    name='Login'
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                    listeners={() => ({
                        focus: () => console.log('EVENT: RootNavigator -> Open Login Screen')
                    })} />
            </RootStack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigator;