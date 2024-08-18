import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import Styles from './ImprintScreen.style'

export default function ImprintScreen({ route }: any) {
    const navigation = useNavigation();
    const { colors } = useTheme();

    useEffect(() => {
        console.log('EVENT: ImprintScreen -> Renderer Screen ');
	}, [])

    return (
        <View style={[Styles.container, {backgroundColor: colors.background}]}>
            <Text style={{color: colors.text}}>
                Angaben gemäß § 5 TMG.
                {'\n'}
                Stefan Zott {'\n'}
                Ahornstraße 24 {'\n'}
                74592 Kirchberg {'\n'}
                {'\n'}
                Email: info@zott-it.de {'\n'}
                 {'\n'}
                Nicht umsatzsteuerpflichtig nach § 19 UStG {'\n'}
                 {'\n'}
                Plattform der EU-Kommission zur Online-Streitbeilegung: {'\n'} https://ec.europa.eu/consumers/odr Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
            </Text>
        </View>
    )
}