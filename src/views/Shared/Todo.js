import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


export default class Todo extends Component {
    render() {
        const {todo} = this.props;

        return (
            <View style={styles.container}>
                <View style={[styles.iconContainer, todo.completed && styles.completedIconContainer]}>
                    <Feather style={[styles.icon, todo.completed && styles.completedIcon]} name="check" size={20} color="#FFF"/>
                </View>
                <Text style={[styles.title, todo.completed && styles.completedTitle]}>{todo.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    iconContainer: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        borderColor: '#EEE',
        borderWidth: 2,
    },
    completedIconContainer: {
        borderColor: '#6AB208',
        backgroundColor: '#6AB208',
    },
    icon: {
        opacity: 0,
    },
    completedIcon: {
        opacity: 1,
    },
    title: {
        flex: 1,
        flexWrap: 'wrap',
        marginLeft: 20,
    },
    completedTitle: {
        textDecorationLine: 'line-through',
    },
});
