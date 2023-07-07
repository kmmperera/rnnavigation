import React from 'react';
import {View,Text,TextInput} from 'react-native';
import {Ionicons} from "@expo/vector-icons";



 function Inputfield  (props){

     return (
         <View   style={{flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:1}}>
              <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
             <TextInput   style={{flex:1, paddingVertical: 0,color:"grey",borderColor:"#ccc"}} placeholder="Write something!!"/>
         </View>
     );
 }

export default Inputfield;
