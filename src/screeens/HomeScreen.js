import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) =>{

    return (
        <View style={styles.root}>
            <Text>Home Screen</Text>
        </View>
    )
}
const styles = StyleSheet.create({
   root:{
       flex: 1,
       width: '100%'
   }
})

export  default  HomeScreen;
