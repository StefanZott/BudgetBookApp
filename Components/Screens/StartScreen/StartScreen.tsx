import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image, Dimensions } from 'react-native';

import { RootStackParams } from '../../../Components/Navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



import Styles from './StartScreen.style';

type Props = NativeStackScreenProps<RootStackParams, 'Start'>

const StartScreen = ({route, navigation}: Props) => {
    const [refresh, setRefresh] = useState<boolean>(true);
    
    useEffect(() => {
        console.log('EVENT: StartScreen -> Renderer Screen!');
        navigation.addListener('focus', () => {
            if (refresh) {
                setTimeout(() => {
                    navigation.navigate('Login');
                }, 3000);
            }
        });

         return () => console.log("EVENT: StartScreen -> Unmounting Start Screen")
    }, [])
    
    return (
        <View style={Styles.container} >

            <View style={Styles.containerAppLogo}>
                <Image source={require('../../../src/img/1.png')} style={Styles.appLogo} />
            </View>
            
        </View>
    )
}

export default StartScreen;