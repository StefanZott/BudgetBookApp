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
    containerTitle: {

    },
    containerFormular: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
    registerBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: BASE_COLOR,
        borderWidth: 1,
        borderRadius: 10,
        height: 40,
        width: '40%'
    },
    registerBtnText: {
        color: BASE_COLOR,
        fontSize: 20,
        fontWeight: '700'
    }
});

export default styles;