import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import Styles from './ProfileScreen.style';

import { useCountryCodeContext } from '../../../Components/Context/i18nContext';
import UserProfile from '../../../Components/User/UserProfile';

const ProfileScreen = () => {
    const navigation = useNavigation();
    const { countryCode } = useCountryCodeContext();
    const { colors } = useTheme();


    useEffect(() => {
        console.log('EVENT: ProfileScreen -> Renderer Screen');
    }, [])

    return (
        <UserProfile />
    )

}

export default ProfileScreen;