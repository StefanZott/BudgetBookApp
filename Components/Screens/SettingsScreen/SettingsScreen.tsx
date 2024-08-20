import React, { useContext, useEffect, useState } from 'react';
import { Switch, Text, View } from 'react-native';

import { useNavigation, useRoute, useTheme } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import Styles from './SettingsScreen.styles'

import { getAppVersion } from '../../Firebase/Firebase'; 

import {i18n} from '../../../Components/i18n/Translate';
import { signOut } from '../../Firebase/Firebase';
import AlertDialog from '../../../Components/Alert/AlertDialog';

import { useDarkModeContext } from '../../../Components/Context/DarkModeContext';
import { useCountryCodeContext } from '../../../Components/Context/i18nContext';

import { SettingsStackParams } from '../../../Components/Navigation/AppNavigator';
type Props = NativeStackScreenProps<SettingsStackParams, 'Settings'>

const Settings = ({route, navigation}: Props) => {
    const { isDarkTheme, setDarkTheme } = useDarkModeContext();
    const { countryCode } = useCountryCodeContext();
    const { colors } = useTheme();
    const [version, setVersion] = useState<string>();

    async function executeLogout() {
        if (await signOut()) {
            console.log('EVENT: SettingsScreen -> Excute Logout')
            navigation.navigate('LoginScreen');
        } else {
            AlertDialog('Achtung', 'Logout fehlgeschlagen!');
        }
        
    }

    async function switchTheme(value: boolean) {
        setDarkTheme(value);
        console.log('EVENT: SettingsScreen -> Set a new Value for DarkMode : ' + !isDarkTheme)
    }
    
    useEffect(() => {
        async function fetchData() {
            const data = await getAppVersion();
            setVersion(data)
        }
        console.log('EVENT: SettingsScreen -> Renderer Screen with params: countryCode = ' + countryCode);
        fetchData()
	}, [])

    return (
        <View style={[Styles.container, { backgroundColor: colors.background }]}>
            <View style={[Styles.menuItem, { borderColor: colors.border }]}>
                <Text style={[Styles.menuText, {color: colors.text, width: '100%'}]} onPress={() => { navigation.navigate('Profile') }}>Proflie</Text>
            </View>
            <View style={[Styles.menuItem, {borderColor: colors.border}]} >
                <Text style={[Styles.menuText, { color: colors.text }]}>{i18n(countryCode,'menu_language')}</Text>
                <Text style={[Styles.menuText, { color: colors.text }]} onPress={() => { console.log('EVENT: SettingsScreen -> Open LanguageSelection Screen'), navigation.navigate('LanguageSelection') }}>{i18n(countryCode, 'language')}</Text>
            </View>
            <View style={[Styles.menuItem, { borderColor: colors.border }]}>
                <Text style={[Styles.menuText, {color: colors.text}]}>{"Version"}</Text>
                <Text style={[Styles.menuText, {color: colors.text}]}>{version}</Text>
            </View>
            <View style={[Styles.menuItem, { borderColor: colors.border }]}>
                <Text style={[Styles.menuText, {color: colors.text}]}>{i18n(countryCode, 'DarkMode')}</Text>
                <Switch
                    value={isDarkTheme}
                    onValueChange={(value) => switchTheme(value)}
                    thumbColor={isDarkTheme ? '#00ff00' : '#ff0000'}
                    trackColor={{false: '#bebebe', true: '#bebebe'}}
                    ios_backgroundColor={'#bebebe'}
                />
            </View>
            <View style={[Styles.menuItem, { borderColor: colors.border }]}>
                <Text style={[Styles.menuText, {color: colors.text, width: '100%'}]} onPress={() => { console.log('EVENT: SettingsScreen -> Open ImprintScreen Screen'), navigation.navigate('Imprint') }}>{i18n(countryCode, 'Imprint')}</Text>
            </View>
            <View style={[Styles.menuItem, { borderColor: colors.border }]}>
                <Text style={[Styles.menuText, {color: colors.text, width: '100%'}]} onPress={() => { executeLogout() }}>Logout</Text>
            </View>
        </View>
    )
}

export default Settings;