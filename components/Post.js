import React from 'react';
import {View,Text ,Button, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

 function Post  ({navigation}){
   // const navigation = useNavigation();
     return (
         <SafeAreaView >
             <Text>This is post</Text>
             <Button title="Go Back" onPress={() => navigation.goBack()} />
             <Button title="Go to Inbox" onPress={() => navigation.navigate("Inbox")} />
         </SafeAreaView>
     );
 }

export default Post;
