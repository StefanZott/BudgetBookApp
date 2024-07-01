import React, { Fragment, Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { BASE_COLOR } from '../Configuration/Config'

export interface Props {
    id: string;
    title: string;
    text: string;
}

interface State {
    id: string;
    title: string;
    text: string;
}

class NewsFeeds extends Component<Props, State> {

    constructor(props: any) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text,
            title: props.title
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>{this.state.title}</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
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

export default NewsFeeds;