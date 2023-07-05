import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stacknav = createNativeStackNavigator();
const Drawernav = createDrawerNavigator();
const Bottomtabnav = createBottomTabNavigator();
const Toptabnav = createMaterialTopTabNavigator();

function Component(Props) {

    return (
        <NavigationContainer>
            <Stacknav.Navigator>
                <Stacknav.Screen name='' component={} />
            </Stacknav.Navigator>
        </NavigationContainer>
    );
}

export default Component;

function Fnname() {
    return ();
}
