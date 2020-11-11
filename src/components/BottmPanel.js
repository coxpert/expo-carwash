import React from  'react';
import {View, StyleSheet } from "react-native";

export const BottomPanel = (props) => {
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

BottomPanel.defaultProps = {
    hidden: false,
}

const styles = StyleSheet.create({
    root:{
        position:'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        alignSelf:'center',
        padding: 10,
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
        backgroundColor:'white',
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
