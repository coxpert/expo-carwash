import React from 'react'
import {LinearGradient} from "expo-linear-gradient";
import {Text, TouchableOpacity} from "react-native";
import {colorGradientEnd, colorGradientStart} from "../constants";

export const GradientButton = (props) => {

    const {
        start,
        end,
        borderRadius,
        title,
        style,
        disabled,
        onPress,
    } = props

    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient
                colors={[colorGradientStart, colorGradientEnd]}
                start = {start}
                end = {end}
                style={{
                    width:'100%',
                    borderRadius: borderRadius,
                    opacity: disabled?0.3:1,
                    backgroundColor:'white',
                    justifyContent:'center',
                    alignItems:'center',
                    height: 60,
                    ...style
                }}
            >
                <Text style={{color:'white', fontSize: 24}}>{title}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}
GradientButton.defaultProps = {
    title:'Continue',
    borderRadius: 8,
    start:[0, 1],
    end:[1, 0],
    style:{},
    disabled: false,
}