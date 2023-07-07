import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import SvgComponent from "../assets/frontimgconverted.js";
import Inputfield from './Inputfield.js'
function Profile(Props) {

    return (
        <SafeAreaView >
            <Text>This is Profile</Text>
            <SvgComponent />
            <View style={{ marginHorizontal:20,}}>
            < Inputfield />
            </View>
        </SafeAreaView>
    );
}

export default Profile;
