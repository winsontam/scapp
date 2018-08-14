import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';


export default class Touchable extends Component {
    static propTypes = {
        ...TouchableOpacity.propTypes,
    };

    static defaultProps = {
        ...TouchableOpacity.defaultProps,
        activeOpacity: 0.7,
    };

    render() {
        return (
            <TouchableOpacity {...this.props}/>
        );
    }
}
