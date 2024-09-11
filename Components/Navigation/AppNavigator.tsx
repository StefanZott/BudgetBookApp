// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import { useEffect, useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { BASE_COLOR } from "../Configuration/Config";
import Styles from './AppNavigator.style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// ---------------------------------------------Navigation----------------------------------------------------------
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigatorScreenParams, NavigationContainer, useNavigation, useRoute } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

// -----------------------------------------------DarkMode----------------------------------------------------------
import { DarkModeContext } from '../Context/DarkModeContext';
import DefaultTheme from '../DarkMode/DefaultTheme';
import DarkTheme from '../DarkMode/DarkTheme';

// ---------------------------------------------Translation----------------------------------------------------------
import { useCountryCodeContext, CountryCodeContext } from '../Context/i18nContext';
import * as RNLocalize from "react-native-localize";

// -----------------------------------------------Screens-----------------------------------------------------------
import StartScreen from "../Screens/StartScreen/StartScreen";
import LoginScreen from "../Screens/LoginScreen/LoginScreen";
import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen";
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SettingsScreen from '../Screens/SettingsScreen/SettingsScreen';
import ImprintScreen from '../Screens/ImprintScreen/ImprintScreen';
import LanguageSelectionScreen from '../Screens/LanguageSelectionScreen/LanguageSelectionScreen';
import ProfileScreen from '../Screens/ProfilScreen/ProfileScreen';
import FinanceOverviewScreen from '../Screens/FinaceOverviewScreen/FinanceOverview';

import { UidContentContext } from '../Context/UIDcontext';

// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              FinanceStack                                                     |
// |_______________________________________________________________________________________________________________|
export type FinanceStackParams = {
    FinanceOverview: undefined;
}

const FinanceStackNavigator = createDrawerNavigator<FinanceStackParams>();
const FinanceStack = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log('EVENT: FinanceStack -> Refresh himself');

    useEffect(() => {
        return () => console.log("EVENT: FinanceStack -> Unmounting himself")
    }, [])

    return (
        <FinanceStackNavigator.Navigator
            initialRouteName='FinanceOverview'
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: BASE_COLOR,
                drawerActiveTintColor: 'white'
            }}
        >
            <FinanceStackNavigator.Screen name='FinanceOverview'
                component={FinanceOverviewScreen}
            />
        </FinanceStackNavigator.Navigator> 
    )
}


// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              RootStack                                                        |
// |_______________________________________________________________________________________________________________|
export type RootStackParams = {
    Start: undefined;
    Login: undefined;
    Register: undefined;
    AppStack: NavigatorScreenParams<AppStackParams>
}

const RootStack = createNativeStackNavigator<RootStackParams>()

const RootNavigator = () => {
    const [uid, setUID] = useState<string>('');
    const [isDarkTheme, setDarkTheme] = useState<boolean>(false);
    const [countryCode, setCountryCode] = useState<string>(RNLocalize.getLocales()[0].countryCode.toString());

    return (
        <DarkModeContext.Provider value={{ isDarkTheme, setDarkTheme }}>
            <UidContentContext.Provider value={{ uid, setUID }}>
                <CountryCodeContext.Provider value={{ countryCode, setCountryCode }}>
                    <NavigationContainer
                        theme={isDarkTheme ? DarkTheme : DefaultTheme}>
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
                            <RootStack.Screen
                                name='Register'
                                component={RegisterScreen}
                                options={{
                                    headerShown: false
                                }}
                                listeners={() => ({
                                    focus: () => console.log('EVENT: RootNavigator -> Open Register Screen')
                                })} />
                            <RootStack.Screen
                                name='AppStack'
                                component={AppRootStack}
                                options={{
                                    headerShown: false
                                }}/>
                        </RootStack.Navigator>
                    </NavigationContainer>
                </CountryCodeContext.Provider>
            </UidContentContext.Provider>
        </DarkModeContext.Provider>
    )
}

// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              AppStack                                                         |
// |_______________________________________________________________________________________________________________|

export type AppStackParams = {
    Home: undefined;
    FinanceStack: NavigatorScreenParams<FinanceStackParams>;
    SettingsStack: NavigatorScreenParams<SettingsStackParams>;
}

const AppStack = createBottomTabNavigator<AppStackParams>();

const AppRootStack = () => {
    console.log('EVENT: AppStack -> Refresh himself');

    useEffect(() => {
        return () => console.log("EVENT: AppStack -> Unmounting AppStack")
    }, [])

    return (
        <AppStack.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: BASE_COLOR,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                tabBarShowLabel: false
            }}
        >
            <AppStack.Screen name='Home'
                component={HomeScreen}
                options={({ navigation }) => ({
                    title: 'Finanz App',
                    unmountOnBlur: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: BASE_COLOR
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white',
                    tabBarButton: (props) => {
                        return <TouchableOpacity style={Styles.tabBarButton} onPress={() => navigation.navigate('Home')}>
                            <AntDesign name="home" size={35} color="white" />
                        </TouchableOpacity>
                    }
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: AppStackNavigator -> Open Home Screen')
                })}/>
            <AppStack.Screen name='FinanceStack'
                component={FinanceStack}
                options={({ navigation }) => ({
                    title: 'Finanzen',
                    unmountOnBlur: true,
                    headerShown: false,
                    tabBarButton: (props) => {
                        return <TouchableOpacity style={Styles.tabBarButton} onPress={() => navigation.navigate('FinanceStack', {screen: 'FinanceOverviewScreen'})}>
                            <MaterialCommunityIcons name="finance" size={35} color="white" />
                        </TouchableOpacity>
                    }
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: AppStackNavigator -> Open FinanceOverview Screen')
                })} />
            <AppStack.Screen name='SettingsStack'
                component={SettingsStack}
                options={({ navigation }) => ({
                    headerShown: false,
                    unmountOnBlur: true,
                    tabBarButton: (props) => {
                        return <TouchableOpacity style={Styles.tabBarButton} onPress={() => navigation.navigate('SettingsStack', {screen: 'Settings'})}>
                            <Icons name="settings-sharp" size={35} color="white" />
                        </TouchableOpacity>
                    }
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: AppStackNavigator -> Open FinanceOverview Screen')
                })} />
        </AppStack.Navigator>
    )
}

// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              SettingsStack                                                    |
// |_______________________________________________________________________________________________________________|
export type SettingsStackParams = {
    Settings: undefined;
    Profile: undefined;
    LanguageSelection: undefined;
    Imprint: undefined;
}

const SettingsStackNavigator = createNativeStackNavigator<SettingsStackParams>();

const SettingsStack = () => {
    const navigation = useNavigation();
    const route = useRoute();
    console.log('EVENT: SettingsStack -> Refresh himself');

    useEffect(() => {
        return () => console.log("EVENT: SettingsStack -> Unmounting himself")
    }, [])

    return (
        <SettingsStackNavigator.Navigator initialRouteName='Settings' >
            <SettingsStackNavigator.Screen name='Settings'
                component={SettingsScreen}
                options={({ navigation }) => ({
                    unmountOnBlur: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: BASE_COLOR
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white'
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: SettingsStackNavigator -> Open Settings Screen')
                })} />
            <SettingsStackNavigator.Screen name='Imprint'
                component={ImprintScreen}
                options={({ navigation }) => ({
                    unmountOnBlur: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: BASE_COLOR
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white',
                    headerBackVisible: true
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: SettingsStackNavigator -> Open Imprint Screen')
                })} />
            <SettingsStackNavigator.Screen name='LanguageSelection'
                component={LanguageSelectionScreen}
                options={({ navigation }) => ({
                    unmountOnBlur: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: BASE_COLOR
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white',
                    headerBackVisible: true
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: SettingsStackNavigator -> Open LanguageSelectionScreen Screen')
                })} />
            <SettingsStackNavigator.Screen name='Profile'
                component={ProfileScreen}
                options={({ navigation }) => ({
                    unmountOnBlur: true,
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: BASE_COLOR
                    },
                    headerTitleStyle: {
                        color: 'white'
                    },
                    headerTintColor: 'white',
                    headerBackVisible: true
                })}
                listeners={() => ({
                    focus: () => console.log('EVENT: SettingsStackNavigator -> Open ProfilScreen')
                })} />
        </SettingsStackNavigator.Navigator>
    )
}

export default RootNavigator;