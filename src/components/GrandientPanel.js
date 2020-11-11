import React from 'react'

import {LinearGradient} from "expo-linear-gradient";
import {colorGradientEnd, colorGradientStart} from "../constants";
export const GradientPanel = (props) => {

    const {
        start,
        end,
        borderWidth,
        borderRadius,
        children,
        style
    } = props

    return (
        <LinearGradient
            colors={[colorGradientStart, colorGradientEnd]}
            start = {start}
            end = {end}
            style={{
                width:'100%',
                borderRadius: borderRadius,
                padding: borderWidth,
                ...style
            }}
        >
            {children}
        </LinearGradient>
    )
}

GradientPanel.defaultProps = {
    start:[0, 1],
    end:[1, 0],
    style:{},
    borderWidth: 2,
    borderRadius: 8,
}