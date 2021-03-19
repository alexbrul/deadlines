import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const SideBar = props => {
    return <View style={sideBarStyle}>
        <View>
            <Text>Sidebar</Text>
        </View>
    </View>

}

const sideBarStyle = {
    paddingTop: 10,
    paddingLeft: 0,
    marginLeft: 0,
    backgroundColor: "black",
    width:"30%", 
    height:"100%", 
    maxWidth:250,
    alignItems: "center",
}

export default SideBar;