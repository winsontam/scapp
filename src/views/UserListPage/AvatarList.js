import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {range} from 'lodash/util';
import UserAvatar from 'react-native-user-avatar';
import Placeholder from 'rn-placeholder';
import Touchable from '../Shared/Touchable';


export default class AvatarList extends Component {
    _keyExtractor = ({id}) => {
        return `#${id}`;
    };

    _renderItem = ({item: user}) => {
        const {loading, onUserPress} = this.props;

        return (
            <AvatarItem
                loading={loading}
                user={user}
                onPress={onUserPress}
            />
        );
    };

    render() {
        const {loading, users, ...props} = this.props;

        let data = users;

        // make 5 fake users for placeholder if it is loading
        if (loading) {
            data = range(5).map((id) => ({id}));
        }

        return (
            <FlatList
                {...props}
                data={data}
                keyExtractor={this._keyExtractor}
                renderItem={this._renderItem}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        );
    }
}


class AvatarItem extends Component {
    _onPress = () => {
        const {user, onPress} = this.props;

        onPress && onPress(user);
    };

    render() {
        const {loading, user} = this.props;

        if (loading) {
            return (
                <View style={itemStyles.container}>
                    <View style={itemStyles.avatarContainer}>
                        <Placeholder.Box height={60} width={60} radius={30} animate="fade"/>
                    </View>
                    <Placeholder.Line width={60} animate="fade"/>
                </View>
            );
        }

        return (
            <Touchable style={itemStyles.container} onPress={this._onPress}>
                <View style={itemStyles.avatarContainer}>
                    <UserAvatar size="60" name={user.name}/>
                </View>
                <Text style={itemStyles.label}>{user.name}</Text>
            </Touchable>
        );
    }
}


const itemStyles = StyleSheet.create({
    container: {
        width: 80,
        marginRight: 5,
        alignItems: 'center',
    },
    avatarContainer: {
        marginBottom: 5,
    },
    label: {
        flex: 1,
        flexWrap: 'wrap',
        fontSize: 10,
        textAlign: 'center',
    },
});
