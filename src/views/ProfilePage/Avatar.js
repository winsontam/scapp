import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';


export default class Avatar extends Component {
    render() {
        const {user} = this.props;

        return (
            <View style={styles.container}>
                <UserAvatar style={styles.avatar} size="80" name={user.name}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
    },
    avatar: {
        borderColor: '#FFF',
        marginTop: -40,
        marginLeft: 20,
    },
});
