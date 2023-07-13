import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import SvgComponent from "../assets/frontimgconverted.js";
import Inputfield from './Inputfield.js'
function Profile(Props) {

    return (
        <SafeAreaView >
            <Text>This is Profile </Text>
            <View style={{height:100,alignItems:"center",justifyContent:"center",marginBottom:100}}>
            <SvgComponent />

             <Text>This is below the input </Text>
            </View>
            <View style={{ marginHorizontal:20,}}>
            < Inputfield />
           
            </View>
        </SafeAreaView>
    );
}

export default Profile;
