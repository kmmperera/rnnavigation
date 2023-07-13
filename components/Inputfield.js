import React ,{useState}from 'react';
import {View,Text,TextInput} from 'react-native';
import {Ionicons} from "@expo/vector-icons";



 function Inputfield  (props){

     const[focusval,setFocusval]=useState(false);


    const Onfocusfunc=()=>{
        setFocusval(true);
    }

    const Onblurfunc=()=>{
        setFocusval(false);

    }
     return (
         <View   style={{flexDirection:"row",borderBottomColor:"#ccc",borderBottomWidth:1}}>
              <Ionicons
              
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
             <TextInput   
             onFocus={Onfocusfunc}
             onBlur={Onblurfunc}
             style={{flex:1, paddingVertical: 0,color:"grey",borderColor:focusval ? "red" :"blue"
             }} 
             placeholder="Write something!!"
             />
         </View>
     );
 }

export default Inputfield;
