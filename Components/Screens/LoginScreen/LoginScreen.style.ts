import { StyleSheet } from 'react-native';

import { BASE_COLOR } from '../../../Components/Configuration/Config'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    containerWelcomeText: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeText: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: '700',
        color: 'black'
    },
    containerAppLogo: {
        display: 'flex',
        // justifyContent: 'flex-start',
        alignItems: 'center',
        flex: 1
    },
    containerLoginMask: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    textInput: {
        borderColor: 'rgba(0, 0, 0, 0.5)',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f6f6f6',
        width: '70%',
        fontSize: 20,
        marginBottom: 15,
        paddingLeft: 15,
        color: 'black'
    },
    loginBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: BASE_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        width: '20%'
    },
    loginBtnText: {
        color: BASE_COLOR,
        fontSize: 20,
        fontWeight: '700'
    },
    containerRegister: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flex: 1,
    },
    registerText: {
        color: 'black'
    }
});

export default styles;