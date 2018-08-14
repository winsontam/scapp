import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import Card from '../Shared/Card';


export default class NameCard extends Component {
    render() {
        const {user: {name, company}} = this.props;

        return (
            <Card>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.companyName}>{company.name}</Text>
                <Text style={styles.catchPhrase}>{company.catchPhrase}</Text>
                <Text style={styles.bs}>{company.bs}</Text>
            </Card>
        );
    }
}


const styles = StyleSheet.create({
    contentContainer: {
        margin: 20,
        marginTop: -40,
    },
    name: {
        marginBottom: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    companyName: {
        marginBottom: 2,
        fontSize: 16,
    },
    catchPhrase: {
        marginBottom: 2,
        color: '#999',
        fontSize: 14,
    },
    bs: {
        marginBottom: 2,
        color: '#999',
        fontSize: 12,
    },
});
