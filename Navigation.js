import React from 'react';
import {Image, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Feed from './components/Feed.js';
import Post from './components/Post.js';
import Inbox from './components/Inbox.js';
import Profile from './components/Profile.js';

import {Ionicons} from "@expo/vector-icons";

import CustomDrawer from './components/CustomDrawer.js';

const Stacknav = createNativeStackNavigator();
const Drawernav = createDrawerNavigator();
const Bottomtabnav = createBottomTabNavigator();
const Toptabnav = createMaterialTopTabNavigator();



function Drawerfunc() {

    return (
        <Drawernav.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{

                headerShown: false,

                drawerActiveBackgroundColor: '#aa18ea',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontSize: 15,
                }
            }}

        >
            < Drawernav.Screen 
            name="Stacknavs"
            component={Stacknavfunc} 
            options={{

                drawerIcon: ({color}) => (
                    <Ionicons name="home-outline" size={22} color={color} />
                  ),
            }}
            />
            < Drawernav.Screen 
            name="Post" 
            component={Post} 
            options={{

                drawerIcon: ({color}) => (
                    <Ionicons name="person-outline" size={22} color={color} />
                  ),
            }}
            
            />
        </Drawernav.Navigator>

    );
}

function Stacknavfunc() {

    return (
        <Stacknav.Navigator screenOptions={{headerShown: false}}>
            < Stacknav.Screen name="Bottomtabs" component={Bottomtabnavfunc} />
        </Stacknav.Navigator>

    );
}
function Bottomtabnavfunc({navigation}) {
    return (

        <Bottomtabnav.Navigator
            screenOptions={({route}) => (

                {
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = "";
                        iconName = route.name === "Toptabnavs" && focused ? "home" : route.name === "Toptabnavs" ? "home-outline" : route.name === "Inbox" && focused ? "ios-notifications" : route.name === "Inbox" ? "notifications-outline" : "";

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#1DA1F2",
                    tabBarInactiveTintColor: "grey",

                }
            )}>
            < Bottomtabnav.Screen name="Toptabnavs" component={Toptabnavfunc}
                options={{
                    headerLeft: () => {

                        return (
                            <Pressable onPress={() => {navigation.openDrawer();}}>

                                <Image
                                    source={require("./assets/nopic.png")}
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 100,
                                        marginLeft: 15,
                                    }}

                                />
                            </Pressable>
                        );
                    }
                }}
            />
            < Bottomtabnav.Screen name="Inbox" component={Inbox} />
        </Bottomtabnav.Navigator>
    );
}

function Toptabnavfunc() {
    return (

        <Toptabnav.Navigator screenOptions={{headerShown: false}}>
            < Toptabnav.Screen name="Feed" component={Feed} />
            < Toptabnav.Screen name="Profile" component={Profile} />
        </Toptabnav.Navigator>

    );
}

export default function Navigations() {
    return (
        < NavigationContainer>
            <Drawerfunc />
        </NavigationContainer>

    );

}