import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import MapView, {Marker} from 'react-native-maps';
import Touchable from '../Shared/Touchable';
import withForwardedRef from '../../utils/withForwardedRef';
import globalStyles from '../globalStyles';


class MapList extends Component {
    _renderMarker = (user) => {
        const {onUserPress} = this.props;

        return (
            <MarkerItem key={`marker${user.id}`} user={user} onPress={onUserPress}/>
        );
    };

    render() {
        const {forwardedRef, users, ...props} = this.props;

        return (
            <MapView {...props} ref={forwardedRef}>
                {users.map(this._renderMarker)}
            </MapView>
        );
    }
}


class MarkerItem extends Component {
    _onPress = () => {
        const {user, onPress} = this.props;

        onPress && onPress(user);
    };

    render() {
        const {user: {name, address, company}} = this.props;

        return (
            <Marker
                coordinate={{
                    latitude: parseFloat(address.geo.lat),
                    longitude: parseFloat(address.geo.lng),
                }}
            >
                <Touchable style={itemStyles.container} onPress={this._onPress}>
                    <View style={[itemStyles.label, globalStyles.shadow]}>
                        <Text style={itemStyles.name}>{name}</Text>
                        <Text style={itemStyles.company}>{company.name}</Text>
                    </View>
                    <UserAvatar style={[itemStyles.avatar, globalStyles.shadow]} size="40" name={name}/>
                </Touchable>
            </Marker>
        );
    }
}


const itemStyles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    avatar: {
        borderWidth: 2,
        borderColor: '#FFF',
    },
    label: {
        padding: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 5,
        marginLeft: -5,
        backgroundColor: '#FFF',
    },
    name: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    company: {
        fontSize: 10,
        color: '#666666',
    },
});


export default withForwardedRef(MapList);
