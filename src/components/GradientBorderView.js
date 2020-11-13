import React from 'react'

import {LinearGradient} from "expo-linear-gradient";
import {colorGradientEnd, colorGradientStart} from "../constants";
import {View, TouchableOpacity} from "react-native";

export const GradientBorderView = (props) => {

    const {
        start,
        end,
        borderWidth,
        borderRadius,
        children,
        style,
        containerStyle,
        fill,
        onPress,
    } = props

    if(onPress){
        return (
            <TouchableOpacity onPress={onPress}>
                <LinearGradient
                    colors={[colorGradientStart, colorGradientEnd]}
                    start = {start}
                    end = {end}
                    style={{
                        width:'100%',
                        borderRadius: borderRadius,
                        padding: borderWidth,
                        justifyContent:'center',
                        alignItems:'center',
                        ...containerStyle,
                    }}
                >
                    <View style={{
                        backgroundColor:fill?'transparent':'white',
                        borderRadius:borderRadius - borderWidth,
                        width:'100%',
                        height:'100%',
                        ...style
                    }}>
                        {children}
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        )
    }
    return (
        <LinearGradient
            colors={[colorGradientStart, colorGradientEnd]}
            start = {start}
            end = {end}
            style={{
                width:'100%',
                borderRadius: borderRadius,
                padding: borderWidth,
                justifyContent:'center',
                alignItems:'center',
                ...containerStyle,
                ...(fill?style:{})
            }}
        >
            {
                fill? children:
                    <View style={{
                        backgroundColor:'white',
                        borderRadius:borderRadius - borderWidth,
                        width:'100%',
                        height:'100%',
                        ...style
                    }}>
                        {children}
                    </View>
            }
        </LinearGradient>
    )
}

GradientBorderView.defaultProps = {
    start:[0, 1],
    end:[1, 0],
    style:{},
    borderWidth: 2,
    borderRadius: 8,
}