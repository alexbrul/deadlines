/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {Text, View, StyleSheet, Button} from 'react-native';
import Task from "./components/Task"
import Menu from "./components/Menu"
import SideBar from "./components/leftMenu/SideBar"
import React from 'react';

const App = () => {
  return <View style={{
    flexDirection: "column",
    height: "100%",
    padding: 0,
    backgroundColor: "blue",
  }}>
    <Menu/>
    <View style={{
      flexDirection: "row",
      height: "100%",
    }}>
      <SideBar/> 
      
    <Text>this is a test!</Text>
    <Task/>
    </View>
  </View>
}
export default App;
