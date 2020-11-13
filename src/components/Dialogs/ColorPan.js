
import React, {useState, useEffect} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {LinearGradient} from "expo-linear-gradient";

export const ColorPan = ({colorName}) => {

    return (
        <LinearGradient
            colors={['white', colorName, 'white']}
            start ={[0, 0]}
            end ={[1,1]}
            style={{
                width:wp('15%'),
                height:wp('15%')
            }}
        >
        </LinearGradient>
    )

}