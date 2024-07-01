import React, { useContext, useState, useEffect } from 'react';
import { Text, View } from 'react-native';

import Styles from './HomeScreen.style'

import { getNews } from '../../Firebase/Firebase'; 

export default function Home({ route }: any, { navigation }: any) {
    const [news, setNews] = useState();
    // signIn("jane.doe@example.com", "SuperSecretPassword!");

    async function getAndAddNewsFeeds() {
        setNews(await getNews());
    }

    useEffect(() => {
        getAndAddNewsFeeds();
	}, [])

    return (
        <View style={Styles.container}>
            {news}
        </View>
    )
}