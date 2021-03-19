import React from 'react';
import {Text, View, StyleSheet} from 'react-native';


const Menu = props => {
    return <View style={menuStyle}>
        <View>
            <Text>Menu test</Text>
        </View>
    </View>

}

const menuStyle = {
    paddingTop: 0,
    paddingLeft: 10,
    marginLeft: 0,
    backgroundColor: "purple",
    height: 50,
    flexDirection: "row",
    //justifyContent: "center",
    alignItems: "center",
}

export default Menu;