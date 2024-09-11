import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    conatiner: {
        height: '100%',
        display: 'flex',
    },
    containerCalendar: {
        display: 'flex',
        flex: 1
    },
    containerContent: {
        display: 'flex',
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;