import React, { useContext, useEffect, useState } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { getData } from '../../Firebase/Firebase';

import Styles from './FinanceOverview.styles'
import { BASE_COLOR } from '../../../Components/Configuration/Config';

import { FinanceStackParams } from '../../Navigation/AppNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { useUidContentContext } from '../../../Components/Context/UIDcontext';

import { useDarkModeContext } from '../../../Components/Context/DarkModeContext';

import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';

type Props = NativeStackScreenProps<FinanceStackParams, 'FinanceOverview'>

const FinanceOverview = ({ route, navigation }: Props) => {
    const { uid } = useUidContentContext();
    const { colors } = useTheme();
    const { isDarkTheme } = useDarkModeContext();
    const [data, setData] = useState([]);

    async function executeGetData() {
        let newData = await getData(uid);

        if (newData != null) {
            setData(newData);
        }
    }
    
    useEffect(() => {
        executeGetData();

        return console.log('EVENT: FinanceOverviewScreen -> Unmounting FinanceOverview Screen');
	}, [])

    return (
        <View style={[Styles.conatiner, { backgroundColor: colors.background }]}>
            <View style={Styles.containerCalendar}>
                <CalendarStrip
                    onDateSelected={(data) => {
                        console.log("Data selected: " + data)
                    }}
                    scrollable
                    highlightDateNumberStyle={{ color: "#000000" }}
                    selectedDate={moment()}
                    startingDate={moment()}
                    style={{height:'100%', paddingTop: 10}}
                    calendarColor={BASE_COLOR}
                    calendarHeaderStyle={{color: 'white'}}
                    dateNumberStyle={{color: 'white'}}
                    dateNameStyle={{color: 'white'}}
                    iconContainer={{flex: 0.1}}
                />
            </View>
            <View style={Styles.containerContent}>
                {data.length != 0 ? data : <Text style={{color: 'black'}}>Keine Daten gefunden!</Text>}
            </View>
        </View>
    )
}

export default FinanceOverview;
