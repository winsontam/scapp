import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Card from '../Shared/Card';


export default class ContactsCard extends Component {
    _renderContact = ([icon, label], key) => {
        return (
            <View key={key} style={contactStyles.container}>
                <Entypo style={contactStyles.icon} name={icon} size={25} color="#999"/>
                <View style={contactStyles.labelContainer}>
                    <Text style={contactStyles.label}>{label}</Text>
                </View>
            </View>
        );
    };

    render() {
        const {user} = this.props;

        const contacts = [
            ['phone', user.phone],
            ['email', user.email],
            ['link', user.website],
            ['location-pin', `${user.address.street} ${user.address.suite} ${user.address.city} ${user.address.zipcode}`],
        ];

        return (
            <Card title="Contacts">
                {contacts.map(this._renderContact)}
            </Card>
        );
    }
}


const contactStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 45,
    },
    labelContainer: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
});
