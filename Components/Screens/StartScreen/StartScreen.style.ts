import { StyleSheet } from 'react-native';

import { BASE_COLOR } from '../../Configuration/Config'

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BASE_COLOR
    },
    containerAppLogo: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '50%'
    },
    appLogo: {
        width: '100%',
        height: '100%'
    }
});

export default styles;