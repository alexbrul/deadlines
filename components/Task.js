import React from 'react';
import {Text, View, StyleSheet} from 'react-native';



const Task = props => {
    return <View style={taskStyle}>
        <Text> This is a deadline</Text>
    </View>
}

const taskStyle = {
    flexDirection: "row",
    height: 100,
    padding: 20,
    backgroundColor: "green",
}

export default Task;
