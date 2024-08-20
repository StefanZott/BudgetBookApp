import { StyleSheet } from 'react-native';

import { BASE_COLOR } from '../../../Components/Configuration/Config';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        height: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    menuItem: {
        height: "10%",
        width: "80%",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 15,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: BASE_COLOR
    },
    content: {
        color: 'white',
        fontSize: 25
    }
});

export default styles;