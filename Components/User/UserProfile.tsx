import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { BASE_COLOR } from '../Configuration/Config';

import { getUserInfo } from '../Firebase/Firebase';
import { useUidContentContext } from '../Context/UIDcontext';

import {i18n} from '../i18n/Translate';
import { useCountryCodeContext } from '../Context/i18nContext';

import { useDarkModeContext } from '../Context/DarkModeContext';
import { useTheme } from '@react-navigation/native';

const UserProfil = () => {
    const { uid } = useUidContentContext();
    const { countryCode } = useCountryCodeContext();
    const { isDarkTheme, setDarkTheme } = useDarkModeContext();
    const { colors } = useTheme();
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    async function executeGetUserInfo() {
        let userInfo = await getUserInfo(uid);
        setFirstName(userInfo['firstName']);
        setLastName(userInfo['lastName']);
        setEmail(userInfo['email']);
        setPassword(userInfo['password']);
    }

    useEffect(() => {
        executeGetUserInfo();
    }, [])

    return (
        <View style={[Styles.container, { backgroundColor: colors.background }]}>
            <View style={Styles.menuItem}>
                <Text style={[Styles.menuText, { color: colors.text }]}>{i18n(countryCode,'firstName')}:</Text>
                <Text style={[Styles.menuText, {color: colors.text}]}>{firstName}</Text>
            </View>
            <View style={Styles.menuItem}>
                <Text style={[Styles.menuText, { color: colors.text }]}>{i18n(countryCode, 'lastName')}:</Text>
                <Text style={[Styles.menuText, {color: colors.text}]}>{lastName}</Text>
            </View>
            <View style={Styles.menuItem}>
                <Text style={[Styles.menuText, { color: colors.text }]}>{i18n(countryCode, 'password')}:</Text>
                <Text style={[Styles.menuText, {color: colors.text}]}>{password}</Text>
            </View>
            <View style={Styles.menuItem}>
                <Text style={[Styles.menuText, { color: colors.text }]}>{i18n(countryCode, 'email')}:</Text>
                <Text style={[Styles.menuText, {color: colors.text}]}>{email}</Text>
            </View>
        </View>
    ) 
    
}

const Styles = StyleSheet.create({
    container: {
        height: "100%",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
    },
    menuItem: {
        borderColor: BASE_COLOR,
        borderWidth: 2,
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        paddingHorizontal: 5,
        marginVertical: 5
    },
    menuText: {
        marginTop: 5,
        marginBottom: 5
    }
});

export default UserProfil;
