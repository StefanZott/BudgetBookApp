import React, { useContext } from 'react';
import { Text, View } from 'react-native';

import Styles from './LanguageSelectionScreen.style';
import { useNavigation, useTheme } from '@react-navigation/native';

import { useCountryCodeContext } from '../../../Components/Context/i18nContext';

export default function LanguageSelectionScreen({ route }: any) {
    const navigation = useNavigation();
    const { colors } = useTheme();
    const { countryCode, setCountryCode } = useCountryCodeContext();

    return (
        <View style={[Styles.container, {backgroundColor: colors.background}]}>
            <View style={Styles.menuItem}>
                <Text
                    style={Styles.content}
                    onPress={() => {
                        setCountryCode('de');
                        console.log('EVENT: LanguageSelection -> Choose German and go back to Settings Screen');
                        navigation.navigate('Settings');
                    }}>{'Deutsch'}</Text>
            </View>

            <View style={Styles.menuItem}>
                <Text
                    style={Styles.content}
                    onPress={() => {
                        setCountryCode('en');
                        console.log('EVENT: LanguageSelection -> Choose English and go back to Settings Screen');
                        navigation.navigate('Settings');
                    }}>{'English'}</Text>
            </View>
            
        </View>
    )
}