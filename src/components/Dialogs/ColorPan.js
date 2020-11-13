
import React from 'react'
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {View, Text, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

export const ColorPan = ({colorName, setColor, openColorPicker, setStep}) => {

    return (
        <View>
            {
                colorName === 'other'?
                    <TouchableOpacity onPress={()=>openColorPicker(true)}>
                        <LinearGradient
                            colors={['red','yellow','green','blue']}
                            start = {[0,1]}
                            end = {[0,0]}
                            style={{
                                width:wp('15%'),
                                height:wp('15%'),
                                margin:wp('1%'),
                                backgroundColor: colorName,
                                borderRadius: wp('4%'),
                                shadowColor: colorName,
                                shadowOffset: { width: -10, height: -10 },
                                shadowOpacity: 0.5,
                                shadowRadius: 5,
                                opacity: 0.7,
                                elevation: 5
                            }}
                        >
                        </LinearGradient>
                    </TouchableOpacity>:
                    <TouchableOpacity
                        onPress = {()=> {
                            setColor(colorName);
                            setStep(4)
                        }}
                        style={{
                            width:wp('15%'),
                            height:wp('15%'),
                            margin:wp('1%'),
                            backgroundColor: colorName,
                            opacity: 0.7,
                            borderRadius: wp('4%'),
                            shadowColor: colorName,
                            shadowOffset: { width: -10, height: -10 },
                            shadowOpacity: 0.5,
                            shadowRadius: 5,
                            elevation: 5,
                        }}
                    >
                    </TouchableOpacity>
            }
            <Text style={{textAlign:'center'}}>{colorName}</Text>
        </View>
    )

}