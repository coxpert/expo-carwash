import React from  'react';
import {View, StyleSheet, TouchableOpacity } from "react-native";

export const Paper = (props) => {
    const {
        children,
        style,
        hidden,
        onPress
    } = props;

    if(onPress){
        return (
            <>
                {
                    hidden? null:
                        <TouchableOpacity onPress={onPress} style={{...styles.root, ...style,}}>
                            {children}
                        </TouchableOpacity>
                }
            </>
        )
    }
    return (
        <>
            {
                hidden? null:
                    <View style={{...styles.root, ...style,}}>
                        {children}
                    </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    root:{
        width: '90%',
        alignSelf:'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor:'white',
        flexDirection:'row',
        shadowColor: "#777",
        alignItems:'center',
        zIndex: 10,

        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        marginVertical: 10
    }
})