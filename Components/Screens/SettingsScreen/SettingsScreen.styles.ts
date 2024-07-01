import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: '100%'
    },
    menuItem: {
        borderBottomColor: 'red',
        borderBottomWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    menuText: {
        marginTop: 5,
        marginBottom: 5
    }

});

export default styles;