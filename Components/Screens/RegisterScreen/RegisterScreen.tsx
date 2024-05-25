// _________________________________________________________________________________________________________________
// |                                                                                                               |
// |                                              Imports                                                          |
// |_______________________________________________________________________________________________________________|
// -----------------------------------------------Library-----------------------------------------------------------
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity, Text, TextInput, View, Image } from 'react-native';

// ---------------------------------------------Navigation----------------------------------------------------------
import { RootStackParams } from '../../../Components/Navigation/AppNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

// -----------------------------------------------Style-------------------------------------------------------------
import Styles from './RegisterScreen.style';

type Props = NativeStackScreenProps<RootStackParams, 'Register'>

const RegisterScreen = ({route, navigation}: Props) => {
    const [email, setEmail] = useState<string>('');
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <View style={Styles.container}>

            {/* Container für das Formular */}
            <View style={Styles.containerFormular}>
                <TextInput
                    value={email}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='E-Mail...'
                    onChangeText={newText => setEmail(newText)} />
                <TextInput
                    value={firstName}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='Vorname...'
                    onChangeText={newText => setFirstName(newText)} />
                <TextInput
                    value={lastName}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='Nachname...'
                    onChangeText={newText => setLastName(newText)} />
                <TextInput
                    value={password}
                    placeholderTextColor={'#bdbdbd'}
                    selectionColor={'#639A8E'}
                    style={Styles.textInput}
                    placeholder='Passwort...'
                    onChangeText={newText => setPassword(newText)} />
                <TouchableOpacity style={Styles.registerBtn} >
                    <Text style={Styles.registerBtnText}>Registrieren</Text>
                </TouchableOpacity >
            </View>
            
        </View>
    )
}

export default RegisterScreen;