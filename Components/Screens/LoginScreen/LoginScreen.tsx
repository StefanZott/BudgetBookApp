// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';

// ------------------------------------------Custom Library---------------------------------------------------------
import { signIn } from '../../Firebase/Firebase';

// -----------------------------------------------Style-------------------------------------------------------------
import Styles from './LoginScreen.style';

// ---------------------------------------------Navigation----------------------------------------------------------
import { RootStackParams } from '../../../Components/Navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTheme } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParams, 'Login'>;

const LoginScreen = ({route, navigation}: Props) => {
    const [eMail, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { colors, dark } = useTheme();
    const [hideConatiner, setHideContainer] = useState<boolean>(false);

    function checkSreenHight(layout: any) {
        if (layout != undefined) {
            const { height } = layout;
        
            if (height < 500) {
                setHideContainer(true);
            } else {
                setHideContainer(false);
            }
        }
    }

    async function executeSignIn() {
        console.log('EVENT: LoginScreen -> Transmit E-Mail and Password to Firebase DB. E-Mail: ' + eMail + ', Password: ' + password);
        let newUid: string | unknown = await signIn(eMail, password);
        console.log('EVENT: LoginScreen -> Firebase DB send UID back: ' + newUid);
    }
    
    useEffect(() => {
         console.log('EVENT: LoginScreen -> Renderer Screen');

         return () => console.log("EVENT: LoginScreen -> Unmounting Login Screen")
    }, [])
    
    return (
        <View style={[Styles.container, {backgroundColor: colors.background}]} onLayout={(event) => { checkSreenHight(event.nativeEvent.layout) }}>
            {/* Container für den Willkommens Text */}
            <View style={ hideConatiner ? {display: 'none'} : Styles.containerWelcomeText}>
                <Text style={[Styles.welcomeText, {color: colors.text}]}>Willkommen bei der {'\n'}Finanz App</Text>
            </View>

            <View style={[Styles.containerAppLogo, { justifyContent: hideConatiner ? 'center' : 'flex-start' }]}>
                { dark ? <Image source={require('../../../src/img/3.png')} style={{width: 100, height: 100}} /> : <Image source={require('../../../src/img/2.png')} style={{width: 100, height: 100}} /> }
            </View>

            {/* Container für den Login */}
            <View style={Styles.containerLoginMask}>
                <TextInput
                    value={eMail}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='E-Mail...'
                    onChangeText={newText => setEmail(newText)} />
                <TextInput
                    value={password}
                    secureTextEntry={true}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='Passwort...'
                    onChangeText={newText => setPassword(newText)}/>
                <TouchableOpacity style={Styles.loginBtn} onPress={() => executeSignIn()}>
                    <Text style={Styles.loginBtnText}>Login</Text>
                </TouchableOpacity >
            </View>

            {/* Container zum registrieren */}
            <View style={hideConatiner ? {display: 'none'} : Styles.containerRegister}>
                <Text style={[Styles.registerText, {color: colors.text}]} onPress={() => navigation.navigate('Register')}>Noch keinen Account?</Text>
            </View>
            
        </View>
    )
}

export default LoginScreen;