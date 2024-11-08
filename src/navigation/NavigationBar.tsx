import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyTabBar } from './MyTabBar';

import { NavigationContainer } from '@react-navigation/native';


export default function NavigationBar() {

    const Tab = createBottomTabNavigator();

    return (
        // <NavigationContainer>
        //     <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        //         <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
        //         <Tab.Screen name="About" component={About} options={{ headerShown: false  }} />
        //     </Tab.Navigator>
        // </NavigationContainer>
        <></>
    )
}

const styles = StyleSheet.create({

});