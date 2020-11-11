import React from  'react';
import {View, StyleSheet } from "react-native";

export const Paper = (props) => {
    const {
        children,
        style,
        hidden
    } = props;

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