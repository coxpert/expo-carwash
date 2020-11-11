import React from 'react';

import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
} from 'react-native';

import { imgBackground, imgLogoText } from "../../constants";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const AuthLayout = (props) =>{

    const {children} = props;

    return (
        <ImageBackground
            source={imgBackground}
            style={styles.root}
        >
            <View style={styles.logoTextContainer} >
                <Image source={imgLogoText}  style ={styles.logoText}/>
            </View>
            {children}
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    root:{
        position: 'relative',
        flex: 1,
        width: '100%'
    },
    logoTextContainer:{
        marginTop:hp('15%'),
        width: wp('100%'),
        height: 70,
    },
    logoText:{
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    },
})

export  default  AuthLayout;
