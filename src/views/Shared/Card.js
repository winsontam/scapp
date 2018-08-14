import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Touchable from './Touchable';


export default class Card extends Component {
    render() {
        const {title, showAction, onActionPress, actionText, children} = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    {title && <Text style={styles.title}>{title}</Text>}
                    {children}
                </View>
                {showAction && <Touchable style={styles.action} onPress={onActionPress}>
                    <Text style={styles.actionText}>{actionText}</Text>
                </Touchable>}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    contentContainer: {
        padding: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 20,
    },
    action: {
        borderTopWidth: 1,
        borderTopColor: '#EEE',
        padding: 15,
    },
    actionText: {
        textAlign: 'center',
    },
});
